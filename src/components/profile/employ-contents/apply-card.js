import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import {useNavigate, Navigate} from "react-router";
import "../../search-result/search.style.css";

export const ApplyJobItem = ({apply}) => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [job, setJob] = useState(apply.job)

    return (
        <div className="card border-success mb-3 cardsize">
              <div className="card-header bg-transparent border-success">
              <span className="left-button">{job.companyname}</span>
              </div>
              <div className="card-body text-success">
                <div className="job-link">
                <Link to={`/applys/${job._id}`} className="job-link">
                    <h5 className="card-title">{job.jobtitle}</h5>
                </Link>
                </div>
                <p className="card-text">{job.location}</p>
                <p className="card-text">{job.salary}</p>
              </div>
              <div className="card-footer bg-transparent border-success">
                    <span>Status: {apply.accept}</span>
              </div>
        </div>
    )
}