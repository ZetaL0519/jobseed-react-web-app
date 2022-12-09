import {createSlice} from "@reduxjs/toolkit";
import { findJobByIdThunk } from "../services/jobs-thunks";

const initialState = {
    job: [],
}

const jobReducer = createSlice({
    name: "job",
    initialState: initialState,
    extraReducers: {
        [findJobByIdThunk.fulfilled]: (state,action) => {
            state.job = action.payload
        },
        [findJobByIdThunk.fulfilled]: (state, action) => {
            state.job = action.payload
        }
    }

})

export default jobReducer.reducer;