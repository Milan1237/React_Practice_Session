import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter ] = useState(0);
  
  
  function addNumber (){
    if(counter < 20){
    setCounter(counter += 1);
    }
    
  }
  function decreaseNumber (){
    if(counter > 0){
      setCounter(counter -= 1);
      }
    
  }
  return (
    <>
      <h1>Current Number {counter}</h1>
      <button onClick={addNumber}>Add Number {counter}</button>
      <button onClick={decreaseNumber }>Decrease Number {counter}</button>
    </>
  )
}

export default App
