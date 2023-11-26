import React from "react";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import LogoutBtn from "./Logout";
function Header() {
    const userData = useSelector((state)=> state.status);
    const navigate = useNavigate();
    const items = [
        {
            name: "Home" ,
            status: true ,
            location: "/" 
        },
        {
            name: "Login",
            status: userData ? false : true ,
            location: "/login"
        },
        {
            name: "Add-Post",
            status: userData ? true : false ,
            location: "/add-post"
        },
        {
            name: "All-Post",
            status: userData ? true : false ,
            location: "/all-post"
        },
        {
            name: "Signup",
            status: userData ? false : true ,
            location: "/signup"
        },
    ]
    return (  
        <header className=" w-full bg-slate-400 py-4 px-8">
            <div className=" w-full flex justify-between ">
               <div>Logo</div>
               <div className="flex ">
                {
                    items.map((item)=>{
                        if(item.status){
                           return <button onClick={()=>{navigate(item.location)}}  className="mx-8" key={item.name}>{item.name}</button>
                        }
                    })
                }
                {userData? <LogoutBtn /> : null}
               </div>
            </div>
        </header>
    );
}

export default Header;