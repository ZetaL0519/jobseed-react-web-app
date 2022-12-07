import axios from "axios";
const BASE_URL = 'http://localhost:4000/api/auth';
const USER_URL = 'http://localhost:4000/api/users';

const api = axios.create({withCredentials: true});

export const findUserById = async (uid) => {
    const response = await api.get(`${USER_URL}/${uid}`)
    const user = response.data
    return user
}

export const createUser = async () => {

}

export const findAllUsers = async () => {
    const response = await axios.get(USER_URL)
    return response.data
}

export const register = async (user) => {
    const response = await api.post(`${BASE_URL}/register`, user)
    return response.data
}

export const login = async (user) => {
    const response = await api.post(`${BASE_URL}/login`, user)
    return response.data
}

export const profile = async () => {
    const response = await api.post(`${BASE_URL}/profile`)
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${BASE_URL}/logout`)
    return response.data
}

export const deleteUser = async (uid) => {
    const response = await axios.delete(`${USER_URL}/${uid}`)
    return response.data
}
export const updateUser = async (uid, userUpdates) => {
    await axios.put(`${USER_URL}/${uid}`, userUpdates);
    return userUpdates
}