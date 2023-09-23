import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 //there is no need add curley braket

let username = 'Milan ';
//this is the way bubble, which is transphile html to tree like structure like below then render function of ReactDom converts it to html

/*
let reactElement = React.createElement(
  'a' ,
  {href:'https://google.com' , target:'_blank'},
  'click me to visit google ',
  username,
  'this is next text to username'
)
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
