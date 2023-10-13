import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false ,
    userData: null 
}

export const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers:{
        login(state , action){
            state.login = true ;
            state.userData = action.payload ;
        },

        logout(state){
            state.logout = false ;
            state.userData = null ;
        }
    }
});

export const  {login , logout} = authSlice.actions ;

export default authSlice.reducer ;