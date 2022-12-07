import {createSlice} from "@reduxjs/toolkit";
import {findJobBySearchTermThunk, findJobByLocationTitleTermThunk} from "../services/search-jobs-thunks";

const initialState = {
   jobs: [],
   loading: false
}

const SearchJobReducer = createSlice({
   name: 'searchjobs',
   initialState,
   extraReducers: {
       [findJobBySearchTermThunk.fulfilled]: (state, action) => {
           state.jobs = action.payload
       },
       [findJobByLocationTitleTermThunk.fulfilled]: (state, action) => {
            state.jobs = action.payload
       }
   }
})

export default SearchJobReducer.reducer