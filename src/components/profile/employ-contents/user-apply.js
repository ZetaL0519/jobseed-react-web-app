import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {findJobByIdThunk} from "../../../services/jobs-thunks";
import { findAllUserApplyJobThunk } from "../../../services/apply-thunks";
import {UserCard} from "./user-card.js"
import "../../search-result/search.style.css";
import "../../jobs/job.css"

const Users = () => {
    const {jid} = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findJobByIdThunk(jid));
        dispatch(findAllUserApplyJobThunk(jid))
    }, [jid])
    const {currentjob} = useSelector((state) => state.jobs);
    const {usersapplyjob} = useSelector((state) => state.applys);
    return(
        <div>
            {currentjob && 
            <div  className="">  
                <h2>{currentjob.jobtitle}</h2>
                <div className="job-detail">
                <p className="text-success">    <span className="bi bi-file-post"> </span>{currentjob.companyname} </p>
                <p className="text-success">    <span className="bi bi-building-fill"> </span>{currentjob.location}</p>
                <p className="text-success">    <span className="bi bi-bank"> </span>{currentjob.salary}</p>
                <br/>
                <div>Summary: {currentjob.summary}</div>
                <br/>
                <h2>All Candidates</h2>
                <div className="roomslist-center">
                    {usersapplyjob && usersapplyjob.map(apply => {
                        return <UserCard apply={apply} key={apply._id}/>
                    })}
                </div>
                </div>
            </div>
            
            
            }
        </div>
    )
}

export default Users;