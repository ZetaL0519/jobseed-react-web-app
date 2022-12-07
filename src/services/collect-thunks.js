import {createAsyncThunk} from "@reduxjs/toolkit";
import {userCollectJob} from "./collect-service";

export const userCollectJobThunk = createAsyncThunk(
    'userCollectJob',
    async (collect) => {
        return await userCollectJob(collect.uid)
    }
)