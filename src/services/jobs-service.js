import axios from "axios";
const BASE_URL = '//localhost:4000/api/jobs'

export const createJob = async(newJob) => {
    const response = await axios.post(BASE_URL, newJob)
    const actualJob = response.data
    return actualJob
}

export const findAllJobs = async() => {
    const response = await axios.get(BASE_URL)
    const jobs = response.data
    return jobs
}

export const updateJob = async() => {}

export const deleteJob = async(jid) => {
    const response = await axios.delete(`${BASE_URL}/${jid}`)
    const status = response.data
    return jid
}