import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {findJobByLocationTitleTermThunk} from "../../services/search-jobs-thunks";
import "./search.style.css";

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
                       <div key={job._id} className="card border-success mb-3">
                             <div className="card-header bg-transparent border-success">{job.companyname}</div>
                             <div className="card-body text-success">
                               <h5 className="card-title">{job.jobtitle}</h5>
                               <p className="card-text">{job.location}</p>
                               <p className="card-text">{job.salary}</p>
                             </div>
                             <div className="card-footer bg-transparent border-success">
                                    <div className="left-button">
                                   <button className="btn btn-success"
                                           type="submit"
                                           >
                                       Apply
                                   </button>
                                   </div>
                                   <div className="right-button">
                                  <button className="btn btn-secondary"
                                          type="submit"
                                          >
                                      Dismiss
                                  </button>
                                  </div>
                             </div>
                           </div>
                       )

                    }
                </div>
            </div>
        </div>
    )
};

export default SearchLocationTitle;