import { createSlice } from "@reduxjs/toolkit"
import { loginWithGoogle, registerWithGoogle } from "../actions/authActions"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser: {},
        token: "",
        loginLoading: false,
        loginError: null,
        logOutLoading: false,
        registerLoading: false,
        registerError: false,
    },
    reducers: {
    //    LOG OUT CONFIGURE
        logoutPending: (state) =>{
            state.logOutLoading = true
        },
        logout: (state) =>{
            state.logOutLoading = false
            state.currentUser = {}
            state.token = ""
        },
    },
    extraReducers: (builder)=>{
        // LOGIN CONFIGURE
        builder.addCase(loginWithGoogle.pending, (state, action)=>{
            state.loginLoading = true
            state.loginError = null
        }),
        builder.addCase(loginWithGoogle.fulfilled, (state, action)=>{
            state.loginLoading = false
            if(action.payload !== undefined){
                state.currentUser = action.payload.user
                state.token = action.payload.token
            }
        }),
        builder.addCase(loginWithGoogle.rejected, (state, action)=>{
            state.loginLoading = false
            state.loginError = action.error.message
            state.currentUser = {}
            state.token = ""
        })
        // REGISTER SLICE CONFIGURE
        builder.addCase(registerWithGoogle.pending, (state, action)=>{
            state.registerLoading = true
            state.registerError = null
        }),
        builder.addCase(registerWithGoogle.fulfilled, (state, action)=>{
            state.registerLoading = false
            if(action.payload !== undefined){
            state.currentUser = action.payload.user
            state.token = action.payload.token
            }
        }),
        builder.addCase(registerWithGoogle.rejected, (state, action)=>{
            state.registerLoading = false
            state.registerError = action.error.message
            state.currentUser = {}
            state.token = ""
        })
    }
})


export const {   logout, logoutPending} = authSlice.actions
export default  authSlice.reducer