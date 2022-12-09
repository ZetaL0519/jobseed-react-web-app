import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllJobs, createJob, deleteJob, findJobPostedbyUser} from "./jobs-service";

export const createJobsThunk = createAsyncThunk(
    'createJob',
    (newJob) => createJob(newJob)
)

export const findAllJobsThunk = createAsyncThunk(
    'findAllJobs',
    () => findAllJobs()
)

export const updateJobThunk = {}
export const deleteJobThunk = createAsyncThunk(
    'deleteJob',
    (jid) => deleteJob(jid)
)

export const findJobPostedbyUserThunk = createAsyncThunk(
    'findJobsPosted',
    (uid) => findJobPostedbyUser(uid)
)
