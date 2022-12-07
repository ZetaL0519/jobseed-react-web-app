import axios from "axios";

const USERS_URL = 'http://localhost:4000/api'

export const userCollectJob = async (uid) => {
    const response = await axios.post(`${USERS_URL}/${uid}/collects`)
    return response.data
}