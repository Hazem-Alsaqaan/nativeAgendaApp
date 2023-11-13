import { createSlice } from "@reduxjs/toolkit";

const caseStateSlice = createSlice({
    name: "objectCase",
    initialState: {
        caseStates:{
            number: "",
            theYear: "",
            plaintiff: "",
            defendant: "",
            typeCase: "",
            fromSession: "",
            toSession: "",
            decision: "",
            itemId: ""
        }
    },
    reducers: {
        setNumber: (state, action) => {
            state.caseStates = {...state.caseStates, number: action.payload}
        },
        setTheYear: (state, action) => {
            state.caseStates = {...state.caseStates, theYear: action.payload}
        },
        setPlaintiff: (state, action) => {
            state.caseStates = {...state.caseStates, plaintiff: action.payload}
        },
        setDefendant: (state, action) => {
            state.caseStates = {...state.caseStates, defendant: action.payload}
        },
        setTypeCase: (state, action) => {
            state.caseStates = {...state.caseStates, typeCase: action.payload}
        },
        setFromSession: (state, action) => {
            state.caseStates = {...state.caseStates, fromSession: action.payload}
        },
        setToSession: (state, action) => {
            state.caseStates = {...state.caseStates, toSession: action.payload}
        },
        setDecision: (state, action) => {
            state.caseStates = {...state.caseStates, decision: action.payload}
        },
        setItemId: (state, action) => {
            state.caseStates = {...state.caseStates, itemId: action.payload}
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
