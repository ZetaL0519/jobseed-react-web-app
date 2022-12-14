import {createSlice} from "@reduxjs/toolkit";
import { createFollowThunk, deleteFollowThunk, findFollowByUidThunk } from "../services/follow-thunks";

const initialState = {
    follows: [],
}

const FollowReducer = createSlice({
    name: 'follows',
    initialState: initialState,
    extraReducers:{
        [createFollowThunk.fulfilled]: (state, action) => {
            state.follows.push(action.payload)
        },
        [findFollowByUidThunk.fulfilled]: (state, action) => {
            state.follows = action.payload
        },
        [deleteFollowThunk.fulfilled]: (state, action) => {
            state.follows = state.follows.filter(a => {
                return (a._id !== action.payload.fid)
            })
           }
    }
})

export default FollowReducer.reducer