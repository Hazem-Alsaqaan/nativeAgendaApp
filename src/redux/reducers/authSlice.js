import { createSlice } from "@reduxjs/toolkit"
// import AsyncStorage from "@react-native-async-storage/async-storage"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser: {},
        token: ""
    },
    reducers: {
        loginFulfilled: (state, action)=>{
            state.currentUser = action.payload.user
            state.token = action.payload.token

        },
        logout: (state) =>{
            state.currentUser = {}
            state.token = ""
        }
    }
})


export const {  loginFulfilled, logout  } = authSlice.actions
export default  authSlice.reducer