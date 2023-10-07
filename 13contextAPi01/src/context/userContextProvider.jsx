import { useState } from "react";
import React from "react";
import userContext from "./userContext";

//the name of the functio of UserContextProvider should be always start with capital letter
function UserContextProvider({children}) {
    const [user , setUser] = useState(null);
    return (  
        <userContext.Provider value={{user , setUser}}>
        {children}
        </userContext.Provider>
    );
}

export default UserContextProvider;