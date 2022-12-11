import axios from "axios";

const USERS_URL = 'http://localhost:4000/api'

export const userApplyJob = async (uid, jid) => {
    const response = await axios.post(`${USERS_URL}/${uid}/applys/${jid}`)
    return response.data
}

export const findOneApply = async (uid, jid) => {
    const response = await axios.get(`${USERS_URL}/${uid}/applys/${jid}`)
    return response.data
}

export const findAllUserApplyJob = async (jid) => {
    const response = await axios.get(`${USERS_URL}/applys/${jid}`)
    return response.data
}

export const findAllJobsApplyUser = async (uid) => {
    const response = await axios.get(`${USERS_URL}/${uid}/applys`)
    return response.data
}

export const UserDeleteJob = async(uid, jid) => {
    const response = await axios.get(`${USERS_URL}/${uid}/applys/${jid}`)
    return response.data
}