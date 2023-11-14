import { createSlice } from "@reduxjs/toolkit"
// import AsyncStorage from "@react-native-async-storage/async-storage"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser: {},
        token: "",
        loginLoading: false,
        registerLoading: false,
        logOutLoading: false
    },
    reducers: {
        loginPending: (state, action)=>{
            state.loginLoading = true
        },
        loginFulfilled: (state, action)=>{
            state.loginLoading = false
            state.currentUser = action.payload.user
            state.token = action.payload.token

        },
        logout: (state) =>{
            state.currentUser = {}
            state.token = ""
        },
        registerPending: (state, action)=>{
            state.registerLoading = true
        },
        registerFulfilled: (state, action)=>{
            state.registerLoading = false
            state.currentUser = action.payload.user
            state.token = action.payload.token

        },
        logoutPending: (state) =>{
            state.logOutLoading = true
        },
        logout: (state) =>{
            state.logOutLoading = false
            state.currentUser = {}
            state.token = ""
        },
    }
})


export const {  loginFulfilled, logout, loginPending, registerFulfilled, registerPending, logoutPending} = authSlice.actions
export default  authSlice.reducer