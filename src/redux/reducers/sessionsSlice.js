import { createSlice } from "@reduxjs/toolkit";
import {
  addNewSession,
  deleteSession,
  getSessions,
  updateSession,
} from "../actions/sessionsAction";

const sessionsSlice = createSlice({
  name: "sessions",
  initialState: {
    sessions: [],
    sessionsLoading: false,
  },
  extraReducers: (builder) => {
    // add new session
    builder.addCase(addNewSession.pending, (state, action) => {
      state.sessionsLoading = true;
    });
    builder.addCase(addNewSession.fulfilled, (state, action) => {
      state.sessionsLoading = false;
      state.sessions = action.payload;
    });
    builder.addCase(addNewSession.rejected, (state, action) => {
      state.sessionsLoading = false;
    });
    // get sessions
    builder.addCase(getSessions.pending, (state, action) => {
      state.sessionsLoading = true;
    });
    builder.addCase(getSessions.fulfilled, (state, action) => {
      state.sessionsLoading = false;
      state.sessions = action.payload;
    });
    builder.addCase(getSessions.rejected, (state, action) => {
      state.sessionsLoading = false;
    });
    // update session
    builder.addCase(updateSession.pending, (state, action) => {
      state.sessionsLoading = true;
    });
    builder.addCase(updateSession.fulfilled, (state, action) => {
      state.sessionsLoading = false;
      state.sessions = action.payload;
    });
    builder.addCase(updateSession.rejected, (state, action) => {
      state.sessionsLoading = false;
    });
    // delete session
    builder.addCase(deleteSession.pending, (state, action) => {
      state.sessionsLoading = true;
    });
    builder.addCase(deleteSession.fulfilled, (state, action) => {
      state.sessionsLoading = false;
      state.sessions = action.payload;
    });
    builder.addCase(deleteSession.rejected, (state, action) => {
      state.sessionsLoading = false;
    });
  },
});

export default sessionsSlice.reducer;
