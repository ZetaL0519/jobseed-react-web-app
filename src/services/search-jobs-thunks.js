import {createAsyncThunk} from "@reduxjs/toolkit";
import {findJobBySearchTerm} from "./search-jobs-service";

export const findJobBySearchTermThunk = createAsyncThunk(
    'findJobBySearchTerm',
    (term) =>  findJobBySearchTerm(term)
)
