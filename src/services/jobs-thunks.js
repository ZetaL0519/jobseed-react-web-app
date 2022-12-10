import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllJobs, createJob, deleteJob, findJobPostedbyUser, findJobById} from "./jobs-service";

export const createJobsThunk = createAsyncThunk(
    'createJob',
    async (createjob) => {
    return await createJob(createjob.newJob, createjob.uid)
}
)

export const findAllJobsThunk = createAsyncThunk(
    'findAllJobs',
    () => findAllJobs()
)

export const findJobByIdThunk = createAsyncThunk(
    'findJobById',
    (jid) => findJobById(jid)
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
