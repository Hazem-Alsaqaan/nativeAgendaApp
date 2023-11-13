import { createSlice } from "@reduxjs/toolkit"
import { ShowSingleCase, addNewCases, deleteCases, showCasesByDate, updateCases } from "../actions/casesAction"


const casesSlice = createSlice({
    name: "casesSlice",
    initialState: {
        casesByDate: [],
        errorMessage: {},
        casesByDateIsLoading: false, 
        singleCase: {},
        singleCaseError: {},
        singleCaseLoading: false,   
    },
    extraReducers: (builder)=>{
        // get cases by date
        builder.addCase(showCasesByDate.pending, (state, action)=>{
            state.casesByDateIsLoading = true
        })
        builder.addCase(showCasesByDate.fulfilled, (state, action)=>{
            state.casesByDateIsLoading = false
            state.casesByDate = action.payload
        })
        builder.addCase(showCasesByDate.rejected, (state, action)=>{
            state.casesByDateIsLoading = false
            state.errorMessage = action.error
        })
        // add new cases 
        builder.addCase(addNewCases.pending, (state, action)=>{
            state.casesByDateIsLoading = true
        })
        builder.addCase(addNewCases.fulfilled, (state, action)=>{
            state.casesByDateIsLoading = false;
            state.casesByDate = [...state.casesByDate, action.payload]
        })
        builder.addCase(addNewCases.rejected, (state, action)=>{
            state.casesByDateIsLoading = false;
            state.errorMessage = action.error
        })
        // update cases
        builder.addCase(updateCases.pending, (state, action)=>{
            state.casesByDateIsLoading = true
        })
        builder.addCase(updateCases.fulfilled, (state, action)=>{
            state.casesByDateIsLoading = false;
            state.casesByDate = action.payload
        })
        builder.addCase(updateCases.rejected, (state, action)=>{
            state.casesByDateIsLoading = false;
            state.errorMessage = action.error
        })
        // delete cases
        builder.addCase(deleteCases.pending, (state, action)=>{
            state.casesByDateIsLoading = true
        })
        builder.addCase(deleteCases.fulfilled, (state, action)=>{
            state.casesByDateIsLoading = false;
            state.casesByDate = state.casesByDate.filter((item)=>{
                return item._id !== action.payload._id
            })
        })
        builder.addCase(deleteCases.rejected, (state, action)=>{
            state.casesByDateIsLoading = false;
            state.errorMessage = action.error
        })
        // show single case
        builder.addCase(ShowSingleCase.pending, (state, action)=>{
            state.singleCaseLoading = true
        })
        builder.addCase(ShowSingleCase.fulfilled, (state, action)=>{
            state.singleCaseLoading = false;
            state.singleCase = action.payload
        })
        builder.addCase(ShowSingleCase.rejected, (state, action)=>{
            state.singleCaseLoading = false;
            state.singleCaseError = action.error
        })
        
    }
})
export default casesSlice.reducer