import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {findJobBySearchTermThunk} from "../../services/search-jobs-thunks";
import {userCollectJobThunk, userDisCollectJobThunk}  from "../../services/collect-thunks"
import {SearchItem} from "./searchitem.js"
import "./search.style.css";

const SearchResult = (searchInput = '') => {
    const {searchTerm} = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
        if (searchTerm !== undefined && searchTerm !== searchInput) {
            dispatch(findJobBySearchTermThunk(searchTerm))
        }
    }, [searchTerm])

    const {jobs} = useSelector((state) => state.searchjobs)
    return (
       <div className="container">
            <h1>{jobs.length} Job Search Results for {searchTerm}</h1>

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

export default SearchResult;