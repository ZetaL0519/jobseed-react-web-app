import axios from "axios";

const SEARCH_URL = 'localhost:4000/api/jobs'

export const findJobBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}/${term}`)
    console.log(response.json);
    return response.data.Search
}

