import {createSlice} from "@reduxjs/toolkit";
import {createJobsThunk, deleteJobThunk, findAllJobsThunk, findJobByIdThunk, findJobPostedbyUserThunk} from "../services/jobs-thunks";

const initialState = {
    jobs: [],
    loading: true,
    currentjob: null,
}

const JobsReducer = createSlice({
    name: 'jobs',
    initialState: initialState,
    extraReducers: {
        [findAllJobsThunk.fulfilled]: (state, action) => {
            state.jobs = action.payload
        },
        [createJobsThunk.fulfilled]: (state, action) => {
            state.jobs.push(action.payload)
        },
        [deleteJobThunk.fulfilled]: (state, action) => {
            // const midx = state.findIndex(m => m._id === action.payload)
            state.jobs = state.jobs.filter(j => {
                return j._id !== action.payload
            })
        },
        [findJobByIdThunk.fulfilled]: (state, action) => {
            state.currentjob = action.payload
        }
//        [findJobPostedbyUserThunk.fulfilled]: (state, action) => {
//            state.jobs = state.jobs.filter(j => {
//                return j._id !== action.payload.id
//            })
//        }
    }
})

export default JobsReducer.reducer;