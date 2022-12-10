import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import {userCollectJobThunk, userDisCollectJobThunk}  from "../../services/collect-thunks"
import {useNavigate, Navigate} from "react-router";
import "./search.style.css";

export const SearchItem = ({job}) => {
    const {currentUser} = useSelector((state) => state.users)
    const [isCollect,setIsCollect] = useState(false)
    const collects = useSelector((state) => state.collects)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const addCollectBtn = (_id) => {
        console.log(isCollect);
        const collect = {uid: currentUser._id,jid:_id}
        if(!isCollect && currentUser != null && currentUser.accountType === 'SEEKER') {
            dispatch(userCollectJobThunk(collect))
        }else if(isCollect && currentUser != null && currentUser.accountType === 'SEEKER') {
            dispatch(userDisCollectJobThunk(collect))
        }
        setIsCollect(!isCollect)
    }

    return (
        <div className="card border-success mb-3">
              <div className="card-header bg-transparent border-success">
              <span className="left-button">{job.companyname}</span>
              <span className="right-button" onClick = {() => addCollectBtn(job._id)} ><i className="bi bi-star"></i></span></div>
              <div className="card-body text-success">
                <Link to={`/jobs/${job._id}`} className="job-link">
                    <h5 className="card-title">{job.jobtitle}</h5>
                </Link>
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