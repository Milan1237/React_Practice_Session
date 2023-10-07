import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (
    <UserContextProvider>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
