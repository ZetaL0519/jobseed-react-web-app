import React from 'react';
import { useSelector } from 'react-redux';
import SeekerProfile from './seeker-profile';
import EmployerProfile from './employer-profile';

const ProfileComponent = () => {
  const { currentUser } = useSelector((state) => state.users);
  const renderCurrentUser = () => {
    if (currentUser === undefined) {
      return <h1>Loading...</h1>;
    }

    if (currentUser.accountType === 'SEEKER') {
      return <SeekerProfile/>;
    }

    return <EmployerProfile />;
  };
  return <div>{renderCurrentUser()}</div>;
};

export default ProfileComponent;