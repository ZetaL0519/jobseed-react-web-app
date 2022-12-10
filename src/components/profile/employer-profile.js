import React, {useEffect, useState} from "react"
import {Link,  useParams} from "react-router-dom"
import "./user-profile-style.css";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../../services/users-thunks";
import {createJobsThunk, findJobPostedbyUserThunk} from "../../services/jobs-thunks";
import {useNavigate} from "react-router";
import {CreateJob} from "../jobs/job-create";
import {JobItem} from "./post-jobs.js"

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
                <button
                    className="btn btn-danger"
                    onClick={handleLogoutBtn}>
                    Logout
                </button>
                <Link to="/profile/edit" className="btn btn-success">Update Profile</Link>
                
                <h1>
                    Welcome to {currentUser.firstName} {currentUser.lastName}'s Profile
                </h1>
                <div className="font-bold">
                    User Role: {currentUser.accountType}
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
                    <h2>Post Job <span><Link to="/profile/createjob" className="btn btn-primary">CreateJob</Link></span></h2>
                    <div className="roomslist-center">
                    {postjobs && postjobs.map(job => <JobItem key={job._id} job={job}/>)}
                    </div>
                </div>
                </div>




            </div>

    )
}

export default EmployerProfile