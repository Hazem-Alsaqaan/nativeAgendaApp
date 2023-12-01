import { createSlice } from "@reduxjs/toolkit";

const sessionStateSlice = createSlice({
  name: "sessionState",
  initialState: {
    decision: "",
    sessionDate: "",
    sessionId: "",
  },
  reducers: {
    setDecision: (state, action) => {
      state.decision = action.payload;
    },
    setSessionDate: (state, action) => {
      state.sessionDate = action.payload;
    },
    setSessionId: (state, action) => {
      state.sessionId = action.payload;
    },
  },
});
export const { setDecision, setSessionDate, setSessionId } =
  sessionStateSlice.actions;
export default sessionStateSlice.reducer;
