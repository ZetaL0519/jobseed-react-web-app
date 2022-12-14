import React, {useEffect, useState} from "react"
import {Link,  useParams} from "react-router-dom"
import "./user-profile-style.css";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../../services/users-thunks";
import {getAllCollectJobsThunk} from "../../services/collect-thunks";
import {findAllJobsApplyUserThunk} from "../../services/apply-thunks";
import { findFollowByUidThunk } from "../../services/follow-thunks";
import {useNavigate} from "react-router";
import {JobItem} from "./seeker-contens/collections";
import {ApplyJobItem} from "./employ-contents/apply-card";

const SeekerProfile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {currentUser} = useSelector((state) => state.users)
    const {collects} = useSelector((state) => state.collects)
    const {applys} = useSelector((state) => state.applys)
    const {follows} = useSelector((state) => state.follows)
    const uid = currentUser._id
    useEffect(() => {
        dispatch(getAllCollectJobsThunk(uid))
        dispatch(findFollowByUidThunk(uid))
    },[uid])

    useEffect(() => {
        dispatch(findAllJobsApplyUserThunk(uid))
    }, [uid])

    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }


    return (
        <>
            <div className="user-profile container">
                    <>
                        <h1>
                            Welcome to {currentUser.firstName} {currentUser.lastName}'s Profile

                            <button
                                className="btn btn-danger float-end mt-3"
                                onClick={handleLogoutBtn}>
                                Logout
                            </button>
                        </h1>
                        <h4>
                            User Role: {currentUser.accountType}  <Link to="/profile/edit" className="btn btn-success">Update Profile</Link>
                        </h4>
                        <div className="bioSection p-2">
                            <div className="fg-white pt-2">
                                <h4>Biography</h4>
                                 <p>{currentUser.biography}</p>
                            </div>
                            <p>
                                <i className="fa fa-map-marker me-2"></i>
                                {currentUser.location}
                                <i className="fa fa-birthday-cake ms-3 me-2"></i>
                                {currentUser.dateOfBirth.split('T')[0]}
                                <i className="far fa-calendar ms-3 me-2"></i>
                                {currentUser.email}
                            </p>

                        </div>
                        <br />
                    </>
            </div>

            <div className="postjobs">
                <h2>My Collections</h2>
                <div className="roomslist-center">
                {collects && collects.map(c => <JobItem key={c.job._id} job={c.job}/>)}
                </div>
            </div>

            <div className="postjobs">
                <h2>My Applications</h2>
                <div className="roomslist-center">
                {applys && applys.map(a => <ApplyJobItem key={a._id} apply={a}/>)}
                </div>
            </div>

            <div className="postjobs">
                <h2>Followed Company</h2>
                <div className="roomslist-center">
                    {follows && follows.map(f => {
                        return (<div className="card border-success mb-3">
                                    <div className="card-header bg-transparent border-success">
                                    <span className="left-button">{f.companyName}</span>
                                    </div>
                                    <div className="card-body text-success">
                                    <div className="job-link">
                                        <h5 className="card-title">{f.companyName}</h5>
                                    </div>
                                    <p className="card-text">{f.headquarters}</p>
                                    <p className="card-text">{f.industry}</p>
                                    </div>
                                </div>)
                    })}
                </div>
            </div>


        </>
    )
}

export default SeekerProfile