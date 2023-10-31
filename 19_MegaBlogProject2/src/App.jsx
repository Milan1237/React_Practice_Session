import './App.css'
import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux';

function App() {
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    

  }, [loading]);

  return (
    <>
     
    </>
  )
}

export default App
