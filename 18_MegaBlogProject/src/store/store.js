import {configureStore} from '@reduxjs/toolkit'
import authSliceReducer from './authStore'

export const store = configureStore({
    reducer: authSliceReducer 
    
})