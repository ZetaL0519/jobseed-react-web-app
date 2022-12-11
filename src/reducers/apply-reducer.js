import {createSlice} from "@reduxjs/toolkit";
import { userApplyJobThunk, findOneApplyThunk, findAllUserApplyJobThunk, findAllJobsApplyUserThunk, UserDeleteJobThunk} from "../services/apply-thunks";

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
        },
        [findAllJobsApplyUserThunk.fulfilled]: (state, action) => {
            state.applys = action.payload
        }
//        [UserDeleteJobThunk.fulfilled]: (state, action) => {
//            state.applys = state.applys.filter(a => a._id !== action.payload.uid && a.job !== action.payload.jid)
//        }
    }
})

export default ApplysReducer.reducer;