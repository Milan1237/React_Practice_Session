import React, { useState , useContext } from "react";
import userContext from "../context/userContext";


function Login() {
    const [name , setName] = useState("");
    const [password , setPassword] = useState("");
    
    const {setUser} = useContext(userContext);

   function handleSubmit (e){
        e.preventDefault();
        setUser({name});
   }
    
    return (
        <>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={(e)=>(setName(e.target.value))}/>
        <label htmlFor="password">Password</label>
        <input id="password" type="text" value={password} onChange={(e)=>(setPassword(e.target.value))}/>
        <button onClick={handleSubmit}>Submit</button>
        </> 

     );
}

export default Login;