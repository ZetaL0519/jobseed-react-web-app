import {createAsyncThunk} from "@reduxjs/toolkit";
import {userCollectJob, userDisCollectJob, getAllCollectJobs} from "./collect-service";

export const userCollectJobThunk = createAsyncThunk(
    'userCollectJob',
    async (collect) => {
        return await userCollectJob(collect.uid,collect.jid)
    }
)

export const userDisCollectJobThunk = createAsyncThunk(
    'userDisCollectJob',
    async (collect) => {
        return await userDisCollectJob(collect.uid,collect.jid)
    }
)

export const getAllCollectJobsThunk = createAsyncThunk(
    'getUserCollectJobs',
    async(collect) => {
        return await getAllCollectJobs(collect.uid)
    }
)