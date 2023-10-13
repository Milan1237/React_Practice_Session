import React from "react";
import authService from "../../appwrite/auth";
import {useDispatch} from 'react-redux'
import {logout} from '../../store/authStore'

function LogoutBtn(){
    const dispatch = useDispatch();

    function logoutHandler(){
        authService.logOut()
        .then(()=>{
            dispatch(logout());
        })
    }

    return <button onClick={logoutHandler} className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-ful">Logout</button> ;
    
}

export default LogoutBtn ;