import {createAsyncThunk} from "@reduxjs/toolkit";
import {userCollectJob, userDisCollectJob, getAllCollectJobs, findOneCollectJob} from "./collect-service";

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
    async(uid) => {
        return await getAllCollectJobs(uid)
    }
)

export const findOneCollectJobThunk = createAsyncThunk(
    'findOneCollect',
    async(collect) => {
        return await findOneCollectJob(collect.uid, collect.jid);
    }
)

