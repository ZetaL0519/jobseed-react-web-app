import React, {useEffect, useState} from "react"
import {Link,  useParams} from "react-router-dom"
import "./user-profile-style.css";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk, findUserByIdThunk} from "../../services/users-thunks";
import {useNavigate} from "react-router";

const UserProfile = () => {
    const navigate = useNavigate()

    const {currentUser} = useSelector((state) => state.users)

    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }

    useEffect(() => {
        dispatch(findUserByIdThunk(currentUser._id))
    }, [currentUser])

    return (
        <>
            <div className="user-profile container">
                    <>
                        <h1>
                            Welcome to {currentUser.firstName} {currentUser.lastName}'s Profile
                        </h1>
                        <h3>
                            Contact: {currentUser.email}
                        </h3>
                        <br />
                        <h4>
                            User Role:
                        </h4>
                        <ul>
                            {
                                currentUser.accountType !== undefined && currentUser.accountType === "SEEKER"? <li>SEEKER</li> : ""
                            }
                            {
                                currentUser.accountType !== undefined && currentUser.accountType === "EMPLOYER"? <li> EMPLOYER</li>: ""
                            }
                        </ul>
                    </>

            </div>

            <button
                className="btn btn-danger"
                onClick={handleLogoutBtn}>
                Logout
            </button>
        </>
    )
}

export default UserProfile