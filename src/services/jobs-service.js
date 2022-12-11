import axios from "axios";
const BASE_URL = '//localhost:4000/api/jobs'
const USER_URL = '//localhost:4000/api/users'

export const createJob = async(newJob, uid) => {
    const response = await axios.post(`${USER_URL}/${uid}/jobs`, newJob)
    const actualJob = response.data
    return actualJob
}

export const findAllJobs = async() => {
    const response = await axios.get(BASE_URL)
    const jobs = response.data
    return jobs
}

export const findJobById = async(jid) => {
    const response = await axios.get(`${BASE_URL}/onejob/${jid}`)
    const job = response.data;
    return job
}

export const updateJob = async(jid, job) => {
    const response = await axios.put(`${BASE_URL}/${jid}`, job)
    return response.data
}

export const deleteJob = async(jid) => {
    const response = await axios.delete(`${BASE_URL}/${jid}`)
    const status = response.data
    return jid
}

export const findJobPostedbyUser = async(uid) => {
    const response = await axios.get(`${USER_URL}/${uid}/jobs`)
    const jobs = response.data
    return jobs
}