import axios from "axios";

const USERS_URL = 'http://localhost:4000/api/weather'

export const createWeather = async(weather) => {
    const response = await axios.post(`${USERS_URL}`, weather)
    return response.data
}