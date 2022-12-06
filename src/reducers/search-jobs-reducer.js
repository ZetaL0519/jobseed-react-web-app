import {createSlice} from "@reduxjs/toolkit";
import {findJobBySearchTerm} from "../services/search-jobs-service";
import {findJobBySearchTermThunk} from "../services/search-jobs-thunks";

const initialState = {
   jobs: [],
   loading: false
}

const SearchJobReducer = createSlice({
   name: 'jobsearch',
   initialState,
   extraReducers: {
       [findJobBySearchTermThunk.fulfilled]: (state, action) => {
           state.jobs = action.payload
       }
   }
})

export default SearchJobReducer.reducer