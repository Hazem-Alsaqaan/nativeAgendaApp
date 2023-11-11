import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../reducers/authSlice"
import casesSlice from "../reducers/casesSlice"
import caseStateSlice from "../reducers/caseStateSlice"


const store = configureStore({
    reducer:{
        authSlice: authSlice,
        casesSlice: casesSlice,
        caseStateSlice: caseStateSlice
    }
})

export default store