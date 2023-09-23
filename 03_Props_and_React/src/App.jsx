import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/custom'

function App() {
  let myarr = [1 , 2 , 3];
  let myArray = myarr;
  return (
    <>
    { <Card username = "Milan" myArray /> }/*this is how we give props to array */
    <Card username='Suvo' myArray={myarr}/>
    <Card/>

    </>
  )
}

export default App
