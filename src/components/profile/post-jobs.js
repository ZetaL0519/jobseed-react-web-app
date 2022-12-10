import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import {userCollectJobThunk, userDisCollectJobThunk}  from "../../services/collect-thunks"
import {useNavigate, Navigate} from "react-router";
import Apply from "../jobs/job-apply"
import "../search-result/search.style.css";

export const JobItem = ({job}) => {
    const {currentUser} = useSelector((state) => state.users)
    const [isCollect,setIsCollect] = useState(false)
    const collects = useSelector((state) => state.collects)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className="card border-success mb-3 cardsize">
              <div className="card-header bg-transparent border-success">
              <span className="left-button">{job.companyname}</span>
              <span className="right-button update-pen"><Link to={`/jobs/${job._id}/edit`}><i className="bi bi-pencil"></i></Link></span>
              </div>
              <div className="card-body text-success">
                <Link to={`/applys/${job._id}`} className="job-link">
                    <h5 className="card-title">{job.jobtitle}</h5>
                </Link>
                <p className="card-text">{job.location}</p>
                <p className="card-text">{job.salary}</p>
              </div>
              <div className="card-footer bg-transparent border-success">
                     <div className="left-button">
                    </div>
                    <div className="right-button">
                   </div>
              </div>
        </div>
    )
}