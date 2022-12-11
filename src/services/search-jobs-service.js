import axios from "axios";

const SEARCH_URL = '//localhost:4000/api/jobs'

export const findJobBySearchTerm = async (term) => {

    const res = axios.get(`${SEARCH_URL}/${term}`).then(response => response.data);
    return res;
}

export const findJobByLocationTitleTerm = async(location, title) => {
    const res = axios.get(`${SEARCH_URL}/${location}/${title}`).then(response => response.data);
    return res;
}