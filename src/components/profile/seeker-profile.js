import React, {useEffect, useState} from "react"
import {Link,  useParams} from "react-router-dom"
import "./user-profile-style.css";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../../services/users-thunks";
import {useNavigate} from "react-router";

const SeekerProfile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {currentUser} = useSelector((state) => state.users)

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
                        </h1>
                        <h4>
                            User Role: {currentUser.accountType}  <Link to="/profile/edit" className="btn btn-success">Update Profile</Link>
                        </h4>
                        <div className="bioSection p-2">
                            <p className="fg-white pt-2">
                                <h4>Biography</h4>
                                 <p>{currentUser.biography}</p>
                            </p>
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

            <h3>My collections</h3>

            <button
                className="btn btn-danger"
                onClick={handleLogoutBtn}>
                Logout
            </button>
        </>
    )
}

export default SeekerProfile