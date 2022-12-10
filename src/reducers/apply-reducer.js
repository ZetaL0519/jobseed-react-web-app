import {createSlice} from "@reduxjs/toolkit";
import { userApplyJobThunk, findOneApplyThunk } from "../services/apply-thunks";

const initialState = {
    applys: [],
    currentapply: null
}

const ApplysReducer = createSlice({
    name: 'applys',
    initialState: initialState,
    extraReducers: {
        [userApplyJobThunk.fulfilled]: (state,action) => {
            state.applys.push(action.payload)
            state.currentapply = action.payload
        },
        [findOneApplyThunk.fulfilled]: (state, action) => {
            state.currentapply = action.payload
        }
    }
})

export default ApplysReducer.reducer;