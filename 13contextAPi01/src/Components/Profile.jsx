import React, { useContext } from "react";
import userContext from "../context/userContext";

function Profile() {
    const {user} = useContext(userContext);
    console.log(user);
    return ( 
        <h1>{user ?  `${user.name}` :"please Login"}</h1>
     );
}

export default Profile;