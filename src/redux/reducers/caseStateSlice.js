import { createSlice } from "@reduxjs/toolkit";

const caseStateSlice = createSlice({
    name: "objectCase",
    initialState: {
        number: "",
        theYear: "",
        plaintiff: "",
        defendant: "",
        typeCase: "",
        fromSession: "",
        toSession: "",
        decision: "",
        itemId: ""
    },
    reducers: {
        setNumber: (state, action) => {
            state.number = action.payload;
        },
        setTheYear: (state, action) => {
            state.theYear = action.payload;
        },
        setPlaintiff: (state, action) => {
            state.plaintiff = action.payload;
        },
        setDefendant: (state, action) => {
            state.defendant = action.payload;
        },
        setTypeCase: (state, action) => {
            state.typeCase = action.payload;
        },
        setFromSession: (state, action) => {
            state.fromSession = action.payload;
        },
        setToSession: (state, action) => {
            state.toSession = action.payload;
        },
        setDecision: (state, action) => {
            state.decision = action.payload;
        },
        setItemId: (state, action) => {
            state.itemId = action.payload;
        }
    
    },
});

export const {
    setNumber,
    setTheYear,
    setPlaintiff,
    setDefendant,
    setTypeCase,
    setFromSession,
    setToSession,
    setDecision,
    setItemId
} = caseStateSlice.actions;
export default caseStateSlice.reducer;
