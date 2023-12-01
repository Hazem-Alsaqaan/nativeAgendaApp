import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducers/authSlice";
import casesSlice from "../reducers/casesSlice";
import caseStateSlice from "../reducers/caseStateSlice";
import sessionsSlice from "../reducers/sessionsSlice";
import sessionStateSlice from "../reducers/sessionStateSlice";

const store = configureStore({
  reducer: {
    authSlice: authSlice,
    casesSlice: casesSlice,
    caseStateSlice: caseStateSlice,
    sessionsSlice: sessionsSlice,
    sessionStateSlice: sessionStateSlice,
  },
});

export default store;
