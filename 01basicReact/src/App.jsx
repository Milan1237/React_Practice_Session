import { useState } from 'react'
import  Demo  from './Custom.jsx';
function App() {
  let username = 'Milan Das';
  return (
    //this is how you add a Evaluated Expression to html
    <>
      <h1>Hello Milan, I am trying to learn react {username}</h1>
      <Demo/>
    </>
  )
}

export default App
