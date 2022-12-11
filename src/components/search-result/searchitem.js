import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import {userCollectJobThunk, userDisCollectJobThunk}  from "../../services/collect-thunks"
import {useNavigate, Navigate} from "react-router";
import Apply from "../jobs/job-apply"
import Collect from "../jobs/job-collection"
import "./search.style.css";

export const SearchItem = ({job}) => {
    const {currentUser} = useSelector((state) => state.users)
    const collects = useSelector((state) => state.collects)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className="card border-success mb-3">
              <div className="card-header bg-transparent border-success">
              <span className="left-button">{job.companyname}</span>
              {currentUser && currentUser.accountType ==="SEEKER" && <Collect uid={currentUser._id} jid={job._id} />}
              </div>
              <div className="card-body text-success">
                <Link to={`/jobs/${job._id}`} className="job-link">
                    <h5 className="card-title">{job.jobtitle}</h5>
                </Link>
                <p className="card-text">{job.location}</p>
                <p className="card-text">{job.salary}</p>
              </div>

              {
                currentUser && currentUser.accountType === "SEEKER" &&
                  <div className="card-footer bg-transparent border-success">
                         <div>
                         <Apply uid={currentUser._id} jid={job._id}/>
                        </div>
                  </div>
              }


        </div>
    )
}