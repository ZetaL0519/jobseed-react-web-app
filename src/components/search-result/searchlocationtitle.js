import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {findJobByLocationTitleTermThunk} from "../../services/search-jobs-thunks";
import "./search.style.css";
import {SearchItem} from "./searchitem.js"

const SearchLocationTitle = ({
    initLocation = '',
    initTitle = ''
}) => {
    const {location} = useParams()
    const {title} = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
        if (location !== undefined && location !== initLocation
            && title !== undefined && title !== initTitle) {
                dispatch(findJobByLocationTitleTermThunk(location, title))
            }
    }, [location, title])

    const {jobs, loading} = useSelector((state) => state.searchjobs)
    return (
       <div className="container">
            <h1>Job Search Results for {title} in {location}</h1>

            <div className="search-result-grid mt-3">
                <div className="roomslist-center">
                    {
                       jobs.map(job =>
                       <SearchItem key={job._id} job={job}/>
                       )
                    }
                </div>
            </div>
        </div>
    )
};

export default SearchLocationTitle;