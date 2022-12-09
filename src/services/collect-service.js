import axios from "axios";

const USERS_URL = 'http://localhost:4000/api'

export const userCollectJob = async (uid, jid) => {
    const response = await axios.post(`${USERS_URL}/${uid}/collects/${jid}`)
    return response.data
}

export const userDisCollectJob = async (uid, jid) => {
    const response = await axios.delete(`${USERS_URL}/${uid}/collects/${jid}`)
    return {uid, jid}
}