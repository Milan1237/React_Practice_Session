import { useEffect, useState } from 'react'
import './App.css'
import conf from './conf/conf.js'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login , logout} from './store/authStore'
import {Footer , Header} from './Components/index'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }
      else{
        dispatch(logout());
      }
    })
    .finally(()=>{setLoading(false)});
  } , []);

  return !loading ? (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  ): (
    <div>loading</div>
  )
}

export default App
