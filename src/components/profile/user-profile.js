import React from "react";
import "./user-profile-style.css";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../../services/users-thunks";


const UserProfile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutThunk())
    }

    return (
        <>
            <div className="user-profile container">
                {/*To do: Design public and private profile */}
                <>
                    <i className="fas fa-chevron-left fa-2x"/>
                    To do: a go back function
                <h1 className="profile-heading">
                    Welcome to Alice Wonderland's Profile
                </h1>
                <h1>Hello! Alice Wonderland</h1>
                </>
                <h4>
                    User roles:
                </h4>

                <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </>
    )
}

export default UserProfile