import {createSlice} from "@reduxjs/toolkit";
import {createJobsThunk, deleteJobThunk, findAllJobsThunk, findJobPostedbyUserThunk} from "../services/jobs-thunks";

const initialState = {
    jobs: [],
    loading: true,
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
        }
//        [findJobPostedbyUserThunk.fulfilled]: (state, action) => {
//            state.jobs = state.jobs.filter(j => {
//                return j._id !== action.payload.id
//            })
//        }
    }
})

export default JobsReducer.reducer;