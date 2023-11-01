import './App.css'
import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux';
import authConfig from './appwrite/auth';
import { login, logout } from './store/storeConfig';
import { Header , Footer } from './Components/index';
function App() {
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authConfig.getCurrentAccount()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }
      else{
        dispatch(logout());
      }
    }).finally(()=>{
      setLoading(false);
    })

  }, []);

  return loading ? <div>Loading</div> :
  <div className=' w-full'>
   <Header />
   <Footer />
   </div>
}

export default App
