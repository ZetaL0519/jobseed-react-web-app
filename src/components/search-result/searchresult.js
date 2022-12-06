import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findJobBySearchTermThunk} from "../../services/search-jobs-thunks";
import SearchItem from "./searchitem.js"

const SearchResult = () => {
    const [searchTerm, setSearchTerm] = useState('chicago')
    const {jobs, loading} = useSelector((state) => state.searchjobs)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findJobBySearchTermThunk(searchTerm))
    }, [])
    return (
       <div className="container">
            <h1>Job Search Results for {searchTerm}</h1>
            <div className="list-group-item">
                <button
                    className="btn btn-success float-end"
                    onClick={() => {
                        dispatch(findJobBySearchTermThunk(searchTerm))
                    }}>Search
                </button>
                <input
                    className="form-control w-75"
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                    value={searchTerm}/>
            </div>

            <div className="search-result-grid">
                <div className="roomslist-center">
                    {
                       jobs && jobs.map(job => <SearchItem key={job._id} job={job}/>)

                    }
                </div>
            </div>
        </div>
    )
};

export default SearchResult;