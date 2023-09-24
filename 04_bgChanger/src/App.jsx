import { useState } from "react"


function App() {
  const [color , setColor] = useState('blue');
  return (
    <div className=" w-full h-screen  flex justify-center "
    style={{background: color}}>
      <div id="bar" className=" bg-white fixed bottom-4 flex flex-wrap justify-center py-4 w-fit rounded-xl px-8 gap-x-8 ">
          <button onClick={()=>setColor('red')}  className=" bg-red-700 px-6 py-3 rounded-2xl text-white">Red</button>
          <button onClick={()=>setColor('green')} className=" bg-green-700 px-6 py-3 rounded-2xl text-white">Red</button>
          <button onClick={()=>setColor('blue')} className=" bg-blue-700 px-6 py-3 rounded-2xl text-white">Red</button>
          <button onClick={()=>setColor('olive')} className=" bg-[olive] px-6 py-3 rounded-2xl text-white">Red</button>
          <button onClick={()=>setColor('orange')} className=" bg-[orange] px-6 py-3 rounded-2xl text-white">Red</button>
      </div>

    </div>
  )
}

export default App
