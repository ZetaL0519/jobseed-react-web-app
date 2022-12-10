import {createSlice} from "@reduxjs/toolkit";
import { userApplyJobThunk, findOneApplyThunk, findAllUserApplyJobThunk} from "../services/apply-thunks";

const initialState = {
    applys: [],
    currentapply: null,
    usersapplyjob: null
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
        },
        [findAllUserApplyJobThunk.fulfilled]: (state, action) =>{
            state.usersapplyjob = action.payload
        },
        [findAllUserApplyJobThunk.rejected]: (state, action) => {
            console.log(action.error)
        }
    }
})

export default ApplysReducer.reducer;