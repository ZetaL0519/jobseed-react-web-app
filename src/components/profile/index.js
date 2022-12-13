import React from 'react';
import { useSelector } from 'react-redux';
import SeekerProfile from './seeker-profile';
import EmployerProfile from './employer-profile';
import {useNavigate, Navigate} from "react-router";

const ProfileComponent = () => {
  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate()
  const renderCurrentUser = () => {
    if (currentUser === undefined) {
      return <h1>Loading...</h1>;
    }

    if (currentUser.accountType === 'SEEKER') {
      return <SeekerProfile/>;
    }

    if (currentUser && currentUser.isAdmin) {
      return (<Navigate to={'/admin'}/>)
  }

    return <EmployerProfile />;
  };
  return <div>{renderCurrentUser()}</div>;
};

export default ProfileComponent;