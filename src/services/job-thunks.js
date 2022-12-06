import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllJobs, createJob, deleteJob} from "./jobs-service";

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