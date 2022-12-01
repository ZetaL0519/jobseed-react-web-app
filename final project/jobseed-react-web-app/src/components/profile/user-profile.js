import React from 'react';
import {useSelector} from 'react-redux';
import './user-profilestyle.css';

const UserProfile = () => {
    const {currentUser} =
        useSelector((state) => state.users)
    return (
        <>
            <h1>Profile</h1>
            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }
        </>
    )

}

export default UserProfile