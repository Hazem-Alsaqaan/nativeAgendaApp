import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser: {},
        token: "",
        loginLoading: false,
        logOutLoading: false,
        registerLoading: false,
        registerError: false,
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
        loginRejected: (state, action)=>{
            state.loginLoading = false
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
        registerRejected:(state, action)=>{
            state.registerError = true
            state.registerLoading = false
            state.currentUser = {}
            state.token = ""
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


export const {  loginFulfilled, logout, loginPending, loginRejected, registerFulfilled, registerPending, registerRejected, logoutPending} = authSlice.actions
export default  authSlice.reducer