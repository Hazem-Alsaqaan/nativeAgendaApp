import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../reducers/authSlice"


const store = configureStore({
    reducer:{
        authSlice: authSlice,
    }
})

export default store