import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {findJobByIdThunk} from "../../services/jobs-thunks";
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
                <p className="text-success">    <span class="bi bi-file-post"> </span>{currentjob.companyname} </p>
                <p className="text-success">    <span class="bi bi-calendar2-fill"> </span>{currentjob.date}</p>
                <p className="text-success">    <span class="bi bi-building-fill"> </span>{currentjob.location}</p>
                <p className="text-success">    <span class="bi bi-bank"> </span>{currentjob.salary}</p>
                <br/>
                <button className="btn btn-success"
                            type="submit"
                            >
                        Apply
                    </button>
                
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