import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [specialCharecter, setSpecialCharecter] = useState(false);
  const [length, setLength] = useState(8);
  let referene = useRef();
  let genPass = useCallback(() => {
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (number) {
      string += "1234567890";
    }
    if (specialCharecter) {
      string += "~!@#$%^&*()_+`|}{<,>.?/"
    }
    for (let i = 0; i < length; i++) {
      let randIndex = Math.floor(Math.random() * string.length);
      pass += string[randIndex];
    }
    setPassword(pass);
  }, [number, specialCharecter, length]);

  useEffect(genPass , [number , length , specialCharecter]);

  let copyToClipboard =useCallback( ()=>{
    referene.current?.select();
    // passwordRef.current?.setSelectionRange(0 , 3);//this method is used to copy password a particulor number of thing
    window.navigator.clipboard.write(password);
  },[password]);

  return (
    <div className='  max-w-md m-auto flex flex-col items-center my-[30px] bg-gray-600 rounded-lg p-[10px] '>
      <h1 className=" text-white mb-[10px] text-2xl ">Password Generator</h1>
      <div className='w-full mb-[10px]'>
        <input
          type="text"
          name="password"
          className=" w-[85%] h-[40px] px-[10px] rounded-lg"
          placeholder='password'
          readOnly
          value={password}
          ref={referene}
        />
        <button className='w-[15%] h-[40px] bg-blue-700' onClick={copyToClipboard}>copy</button>
      </div>
      <div className=' w-full gap-x-2 flex'>
        <input type="range"
          value={length}
          maxLength={100}
          minLength={0}
          onChange={(event) => { setLength(event.target.value) }}
        />
        <label className='text-white'>length </label>
        <div>
          <input type="checkBox" checked={number} onChange={(event) => { setNumber(event.target.checked) }} />
          <label className='text-white'>Number</label>
        </div>
        <div>
          <input type="checkBox" checked={specialCharecter} onChange={(event) => { setSpecialCharecter(event.target.checked) }} />
          <label className='text-white'>Charecter</label>
        </div>
      </div>

    </div>
  )
}



export default App
