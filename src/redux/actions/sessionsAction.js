import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// add new session
export const addNewSession = createAsyncThunk(
  "sessions/addNewSession",
  async (item) => {
    try {
      const res = await axios.post(
        `https://doubtful-slip-mite.cyclic.app/api/v1/sessions/newSession`,
        {
          decision: item.decision,
          sessionDate: item.sessionDate,
          caseId: item.caseId,
        },
        {
          headers: {
            Authorization: `${item.token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

// show sessions
export const getSessions = createAsyncThunk(
  "sessions/getSessions",
  async () => {
    try {
      const res = await axios.get(
        `https://doubtful-slip-mite.cyclic.app/api/v1/sessions/getSessions`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

// update session
export const updateSession = createAsyncThunk(
  "sessions/updateSession",
  async (item) => {
    try {
      const res = await axios.patch(
        `https://doubtful-slip-mite.cyclic.app/api/v1/sessions/updateSession/${item.sessionId}`,
        {
          decision: item.decision,
          sessionDate: item.sessionDate,
        }
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);
// delete session
export const deleteSession = createAsyncThunk(
  "sessions/deleteSession",
  async (item) => {
    try {
      const res = await axios.delete(
        `https://doubtful-slip-mite.cyclic.app/api/v1/sessions/deleteSession/${item.sessionId}`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);
