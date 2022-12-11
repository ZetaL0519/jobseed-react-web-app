import {createSlice} from "@reduxjs/toolkit";
import {userCollectJobThunk, userDisCollectJobThunk, getAllCollectJobsThunk} from "../services/collect-thunks";

const initialState = {
    collects: [],
    loading: true
}

const CollectsReducer = createSlice({
    name: 'collects',
    initialState: initialState,
    extraReducers: {
        [userCollectJobThunk.fulfilled]: (state,action) => {
            state.loading = false
            state.collects.push(action.payload)
        },
        [userDisCollectJobThunk.fulfilled]: (state, action) => {
            state.loading = false
            state.collects = state.collects.filter(c => {
                return (c._id !== action.payload.uid && c.job !== action.payload.jid)
            })
        },
        [getAllCollectJobsThunk.fulfilled]: (state, action) => {
            state.loading = false
            state.collects = action.payload
        }

    }
})

export default CollectsReducer.reducer;