import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import ToastMessage from "../../components/ToastMessage"


// HANDLE USER LOGIN
export const loginWithGoogle = createAsyncThunk("auth/loginWithGoogle", async(item, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const userLoginInfo = await axios.post(`https://agend-api.onrender.com/api/v2/users/login`,
            {
                name: item.name,
                email: item.email,
                picture: item.photo
            })
            return userLoginInfo.data
    }catch(err){
        if (err.message === "Network Error") {
            ToastMessage("تأكد من اتصالك بالانترنت")
            rejectWithValue("تأكد من اتصالك بالانترنت")
        } else if (err.response.data.error_description) {
            ToastMessage(err.response.data.error_description)
            rejectWithValue(err.response.data.error_description)
        } else if (err.response.data.message) {
            ToastMessage(err.response.data.message)
            rejectWithValue(err.response.data.message)
        } else {
            ToastMessage(err.response.data)
            rejectWithValue(err.response.data)
        }
    }
})

// HANDLE USER REGISTER
export const registerWithGoogle = createAsyncThunk("auth/registerWithGoogle", async(item, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const userRegisterInfo = await axios.post(`https://agend-api.onrender.com/api/v2/users/register`,
            {
                name: item.name,
                email: item.email,
                picture: item.photo
            })
            return userRegisterInfo.data
    }catch(err){
        if (err.message === "Network Error") {
            ToastMessage("تأكد من اتصالك بالانترنت")
            rejectWithValue("تأكد من اتصالك بالانترنت")
        } else if (err.response.data.error_description) {
            ToastMessage(err.response.data.error_description)
            rejectWithValue(err.response.data.error_description)
        } else if (err.response.data.message) {
            ToastMessage(err.response.data.message)
            rejectWithValue(err.response.data.message)
        } else {
            ToastMessage(err.response.data)
            rejectWithValue(err.response.data)
        }
    }
})