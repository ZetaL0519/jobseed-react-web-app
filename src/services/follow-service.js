import axios from "axios";

const USERS_URL = 'http://localhost:4000/api/follows'

export const createFollow = async(company, uid) =>{ 
    const response = await axios.post(`${USERS_URL}/${uid}`, company)
    return response.data
}

export const deleteFollow = async(uid, cid) => {
    const response = await axios.delete(`${USERS_URL}/${uid}/${cid}`)
    return uid, cid
}

export const findFollowByUid = async(uid) => {
    const response = await axios.get(`${USERS_URL}/${uid}`)
    return response.data
}