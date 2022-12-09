import {createSlice} from "@reduxjs/toolkit";
import {userCollectJobThunk, userDisCollectJobThunk} from "../services/collect-thunks";

const initialState = {
    collects: [],
}

const CollectsReducer = createSlice({
    name: 'collects',
    initialState: initialState,
    extraReducers: {
        [userCollectJobThunk.fulfilled]: (state,action) => {
            state.collects.push(action.payload)
        },
        [userDisCollectJobThunk.fulfilled]: (state, action) => {
            state.collects = state.collects.filter(c => {
                return (c._id !== action.payload.uid && c.job !== action.payload.jid)
            })
        }
    }
})

export default CollectsReducer.reducer;