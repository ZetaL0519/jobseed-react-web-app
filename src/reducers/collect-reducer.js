import {createSlice} from "@reduxjs/toolkit";
import {userCollectJobThunk, userDisCollectJobThunk, getAllCollectJobsThunk, findOneCollectJobThunk} from "../services/collect-thunks";

const initialState = {
    collects: [],
    currentcollect: null,
    loading: true
}

const CollectsReducer = createSlice({
    name: 'collects',
    initialState: initialState,
    extraReducers: {
        [userCollectJobThunk.fulfilled]: (state,action) => {
            state.loading = false
            state.currentcollect = action.payload
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
        },
        [findOneCollectJobThunk.fulfilled]: (state, action) => {
            state.currentcollect = action.payload
        },
        [userDisCollectJobThunk.fulfilled]: (state, action) => {
            // console.log(action,'aaaaaa')
            state.collects = state.collects.filter(c => {
                return (c.job._id !== action.payload.jid)
            })
        }

    }
})

export default CollectsReducer.reducer;