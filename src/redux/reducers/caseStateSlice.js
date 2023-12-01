import { createSlice } from "@reduxjs/toolkit";

const caseStateSlice = createSlice({
  name: "objectCase",
  initialState: {
    caseStates: {
      number: "",
      theYear: "",
      plaintiff: "",
      defendant: "",
      typeCase: "",
      itemId: "",
    },
    buttonMood: "create",
    sessionButton: "add",
  },
  reducers: {
    setNumber: (state, action) => {
      state.caseStates = { ...state.caseStates, number: action.payload };
    },
    setTheYear: (state, action) => {
      state.caseStates = { ...state.caseStates, theYear: action.payload };
    },
    setPlaintiff: (state, action) => {
      state.caseStates = { ...state.caseStates, plaintiff: action.payload };
    },
    setDefendant: (state, action) => {
      state.caseStates = { ...state.caseStates, defendant: action.payload };
    },
    setTypeCase: (state, action) => {
      state.caseStates = { ...state.caseStates, typeCase: action.payload };
    },
    setItemId: (state, action) => {
      state.caseStates = { ...state.caseStates, itemId: action.payload };
    },
    setButtonMood: (state, action) => {
      state.buttonMood = action.payload;
    },
    setSesstionButton: (state, action) => {
      state.sessionButton = action.payload;
    },
  },
});

export const {
  setNumber,
  setTheYear,
  setPlaintiff,
  setDefendant,
  setTypeCase,
  setItemId,
  setButtonMood,
  setSesstionButton,
} = caseStateSlice.actions;
export default caseStateSlice.reducer;
