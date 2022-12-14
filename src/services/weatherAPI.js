import axios from "axios";

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&"
const LA_LON_URL = "https://api.openweathermap.org/geo/1.0/direct?q="

const API_KEY = "beb0a34de481e5930358e135d3d98f18"

export const getWeather = async (city) => {
    const geo = await axios.get(`${LA_LON_URL}${city}&appid=${API_KEY}`)
    const weather = await axios.get(`${WEATHER_URL}lat=${geo.data[0].lat}&lon=${geo.data[0].lon}&appid=${API_KEY}`)
    return weather
}