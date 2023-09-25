import { useState , useCallback , useEffect , useRef } from 'react'
import './App.css'

function App() {
  const [password , setPassword] = useState("");
  const [length , setLength] = useState(8);
  const [numAllowed , setNumAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  let passwordRef = useRef(null); //currently password is holding null
  let copyToClipboard =useCallback( ()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0 , 3);//this method is used to copy password a particulor number of thing
    window.navigator.clipboard.write(password);
  },[password]);
  let passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str += "0123456789";
    if(charAllowed) str+= "~`!@#$%^&*()_+-={[}]\|,./<>?"

    for( let i = 0 ; i < length ; i++ ) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str[index];
    } ;
    setPassword(pass);
  } , [length , numAllowed , charAllowed]);

  useEffect(passwordGenerator , [length , charAllowed , numAllowed , passwordGenerator]);
  

  return (
    <div className='  max-w-md m-auto flex flex-col items-center my-[30px] bg-gray-600 rounded-lg p-[10px] '>
    <h1 className=" text-white mb-[10px] text-2xl ">Password Generator</h1>
    <div className='w-full mb-[10px]'>
      <input
        type="text" 
        name="password"
        defaultValue = {password}
        className=" w-[85%] h-[40px] px-[10px] rounded-lg"
        placeholder='password'
        readOnly
        ref={passwordRef}
      />
      <button onClick={copyToClipboard} className='w-[15%] h-[40px] bg-blue-700 '>copy</button>
    </div>
    <div className=' w-full gap-x-2 flex'>
      <input type="range"
       defaultValue={8} 
       maxLength={100}
       minLength={0}
       onChange={(e)=> setLength(e.target.value)}
      />
      <label className='text-white'>length {length}</label>
      <div>
      <input type="checkBox"
       onClick={(e)=> setNumAllowed((prev)=> !prev)}
      />
      <label className='text-white'>Number</label>
      </div>
      <div>
      <input type="checkBox"
       onClick={(e) => setCharAllowed((prev)=> !prev)}
      />
      <label className='text-white'>Charecter</label>
      </div>
    </div>
    
    </div>
  )
}


export default App
