import React, {useEffect, useState} from "react"
import {Link,  useParams} from "react-router-dom"
import "./user-profile-style.css";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../../services/users-thunks";
import {createJobsThunk, findJobPostedbyUserThunk} from "../../services/jobs-thunks";
import {useNavigate} from "react-router";
import {CreateJob} from "../jobs/job-create";
import {JobItem} from "./employ-contents/post-jobs.js"

const EmployerProfile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const {postjobs} = useSelector((state) => state.jobs)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findJobPostedbyUserThunk(currentUser._id))
    },[])

    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }
    return (
            <div className="user-profile container ">
                
                
                <h1>
                    Welcome to {currentUser.firstName} {currentUser.lastName}'s Profile
                </h1>
                <div className="font-bold">
                    User Role: {currentUser.accountType} <Link to="/profile/edit" className="btn btn-success">Update</Link>
                </div>
                <div className="bioSection p-2">
                    <p className="fg-white pt-2">
                        {currentUser.bio}
                    </p>
                    <p>
                        <i className="fa fa-map-marker me-2"></i>
                        {currentUser.location}
                        <i className="fa fa-birthday-cake ms-3 me-2"></i>
                        {currentUser.dateOfBirth.split('T')[0]}
                        <i className="far fa-calendar ms-3 me-2"></i>
                        {currentUser.email}
                    </p>
                <div className="postjobs">
                    <div className="">
                    <div className="left-button borde-title"><h2>Post Job </h2></div>
                    <div className="right-button"><Link to="/profile/createjob" className="btn btn-primary">+</Link></div>
                    </div>
                    <div className="roomslist-center">
                    {postjobs && postjobs.map(job => <JobItem key={job._id} job={job}/>)}
                    </div>
                </div>
                </div>
                <button
                    className="btn btn-danger"
                    onClick={handleLogoutBtn}>
                    Logout
                </button>



            </div>

    )
}

export default EmployerProfile