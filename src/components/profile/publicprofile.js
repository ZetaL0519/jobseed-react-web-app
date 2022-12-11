import {Link,  useParams} from "react-router-dom"
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import { findUserByIdThunk} from "../../services/users-thunks"

const PublicProfile = () => {
    const uid = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findUserByIdThunk(uid.uid))
    }, [])
    const {publicProfile}= useSelector((state) => state.users);
    console.log(publicProfile)

    return (
        <div>
        {publicProfile && <div className="user-profile container ">
            <h1>
            Welcome to {publicProfile.firstName} {publicProfile.lastName}'s Profile
            </h1>
            <div className="font-bold">
            User Role: {publicProfile.accountType}
            </div>
        <div className="bioSection p-2">
            <p className="fg-white pt-2">
                {publicProfile.bio}
            </p>
            <p>
                <i className="fa fa-map-marker me-2"></i>
                {publicProfile.location}
                <i className="fa fa-birthday-cake ms-3 me-2"></i>
                {publicProfile.dateOfBirth && publicProfile.dateOfBirth.split('T')[0]}
                <i className="far fa-calendar ms-3 me-2"></i>
                {publicProfile.email}
            </p>
            </div>
        </div>}
        </div>
    )
}

export default PublicProfile