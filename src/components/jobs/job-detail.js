import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {findJobByIdThunk} from "../../services/jobs-thunks";

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
            <div>  
                <h2>{currentjob.jobtitle}</h2>
                <p className="text-success"><span class="bi bi-file-post"></span>{currentjob.companyname} {currentjob.date}</p>
                <p className="text-success"><span class="bi bi-building-fill"></span> {currentjob.location}</p>
                <br/>
                <button className="btn btn-success"
                            type="submit"
                            >
                        Apply
                    </button>
                <div>
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