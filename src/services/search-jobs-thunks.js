import {createAsyncThunk} from "@reduxjs/toolkit";
import {findJobBySearchTerm, findJobByLocationTitleTerm} from "./search-jobs-service";

export const findJobBySearchTermThunk = createAsyncThunk(
    'findJobBySearchTerm',
    (term) =>  findJobBySearchTerm(term)
)

export const findJobByLocationTitleTermThunk = createAsyncThunk(
    'findJobByLocationTitleTerm',
    (location, title) => findJobByLocationTitleTerm(location, title)
)