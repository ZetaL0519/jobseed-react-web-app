import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {findJobByIdThunk} from "../../services/jobs-thunks";
import Apply from "./job-apply";
import "./job.css"

const JobDetail = () => {
    const {jid} = useParams();
    const {currentUser} = useSelector((state) => state.users);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findJobByIdThunk(jid));
    }, [jid])
    const {currentjob} = useSelector((state) => state.jobs);

    return (
        <div className="container">
            {currentjob && 
            <div  className="job-container">  
                <h2>{currentjob.jobtitle}</h2>
                <br/>
                <div className="job-detail">
                <p className="text-success">    <span className="bi bi-file-post"> </span>{currentjob.companyname} </p>
                <p className="text-success">    <span className="bi bi-calendar2-fill"> </span>{currentjob.date}</p>
                <p className="text-success">    <span className="bi bi-building-fill"> </span>{currentjob.location}</p>
                <p className="text-success">    <span className="bi bi-bank"> </span>{currentjob.salary}</p>
                <br/>
                {currentUser && <Apply uid={currentUser._id} jid={jid}/>}
                <br/>
                <br/>
                <h2>About us</h2>
                <p> {currentjob.summary}</p>
                </div>
            </div>
            
            
            }
            
            
            
            
        </div>
    )
}

export default JobDetail;