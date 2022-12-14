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
            console.log("action", action.payload)
        },
        [createFollowThunk.rejected]: (state, action) => {
            console.log("err")
            console.log("action", action.error)
        },
        [findFollowByUidThunk.fulfilled]: (state, action) => {
            state.follows = action.payload
        },
        [deleteFollowThunk.fulfilled]: (state, action) => {
            state.follows = state.follows.filter(a => {
                return (a.follower !== action.payload.uid && a.companyId !== action.payload.cid)
            })
           }
    }
})

export default FollowReducer.reducer