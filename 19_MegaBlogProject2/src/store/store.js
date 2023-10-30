import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../store/storeConfig'

export const store = configureStore({
    reducer: authReducer 
})