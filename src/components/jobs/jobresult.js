import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findAllJobsThunk} from "../../services/jobs-thunks";
import {SearchItem} from "../search-result/searchitem.js"

const JobResult = () => {
    const {jobs} = useSelector((state) => state.jobs)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllJobsThunk())
    }, [])
    console.log(jobs.length)
    return(
       <div className="container">
            <h2>All {jobs.length} Jobs Available</h2>

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
}

export default JobResult;