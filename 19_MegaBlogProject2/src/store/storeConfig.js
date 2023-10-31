import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false ,
    userData: null ,
}

export const authStore = createSlice({
    name: "authentication",
    initialState,
    reducers:{
        login: (state , action)=>{
            state.status = true ;
            state.userData = action.payload ;
        },

        logout: (state)=>{
            state.status = false ;
            state.userData = null ;
        }
    }
})

export default authStore.reducer ;
export const {login , logout} = authStore.actions ;