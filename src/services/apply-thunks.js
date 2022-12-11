import {createAsyncThunk} from "@reduxjs/toolkit";
import {userApplyJob, findOneApply, findAllUserApplyJob, findAllJobsApplyUser, UserDeleteJob} from "./apply-service";

export const userApplyJobThunk = createAsyncThunk(
    'userApplyJob',
    async (apply) => {
        return await userApplyJob(apply.uid, apply.jid)
    }
)

export const findOneApplyThunk = createAsyncThunk(
    'findOneApply',
    async (apply) => {
        return await findOneApply(apply.uid, apply.jid);
    }
)

export const findAllUserApplyJobThunk = createAsyncThunk(
    'findAllUserApplyJob',
    async(jid) => {
        return await findAllUserApplyJob(jid)
    }
)

export const findAllJobsApplyUserThunk = createAsyncThunk(
    'findAllJobsApplyUser',
    async(uid) => {
        return await findAllJobsApplyUser(uid)
    }
)
export const UserDeleteJobThunk = createAsyncThunk(
    'UserDeleteJob',
    async(apply) => {
        return await UserDeleteJob(apply.uid, apply.jid)
    }
)