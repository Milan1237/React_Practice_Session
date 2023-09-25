import { useState } from 'react'
import InputBox  from './components/index'
import  useCurrencyInfo  from './Hooks/currencyInfo';

function App() {
  const [from , setFrom] = useState('usd');
  const [to , setTo] = useState('inr');
  const [amount, setAmount] = useState(0);
  const [convertedAmount , setConvertedAmount] = useState(0);
  const [currency , setCurrency] = useState(from);
  
  let currencyInfo = useCurrencyInfo(currency);
  let options = Object.keys(currencyInfo);

  let convertAmount = ()=>{
    setConvertedAmount(currencyInfo[to] * amount);
  }
  let swap = ()=>{
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/18013308/pexels-photo-18013308/free-photo-of-wooden-rural-house-on-cliff-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
    }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label = "from"
                amount ={amount}
                onAmountChange = {(am)=>setAmount(am)}
                currencyType = {options}
                selectCurrency={from} 
                onCurrencyChange = {(cc)=>{setFrom(cc) ; setCurrency(cc)}}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label = "to"
                amount ={convertedAmount}
                currencyType = {options}
                selectCurrency={to} 
                onCurrencyChange = {(cc)=>{setTo(cc)}}
                amountDisabled
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={convertAmount}
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
