import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, Link} from "react-router-dom";
import {updateUserThunk, profileThunk} from "../../services/users-thunks";

const EditProfile = () => {
  const {currentUser} = useSelector(state => state.users);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState(currentUser.firstName);
  const [lastName, setLastName] = useState(currentUser.lastName);
  const [email, setEmail] = useState(currentUser.email);
  const [location, setLocation] = useState(currentUser.location);
  const [biography, setBiography] = useState(currentUser.biography);
  const [dateOfBirth, setDateOfBirth] = useState(currentUser.dateOfBirth);

  const saveClickHandler = () => {
    const newUser = {
        ...currentUser,
        firstName: firstName,
        email: email,
        lastName: lastName,
        location: location,
        biography: biography,
        dateOfBirth: dateOfBirth
    }
    dispatch(updateUserThunk(newUser))
    navigate("../profile")
    dispatch(profileThunk())
  }
 return(
      <div>
        <div className="row mt-2 px-3 mb-2">
          <div className="col-1">
            <Link to="/profile" className="ms-3 fg-white"><i className="fa fa-times"/></Link>
          </div>

           <div className="col-9 ">
                <h5 className="fw-bold ms-4">Edit Profile</h5>
           </div>
           <div className="col-2">
                <button className="btn btn-dark  rounded-pill" onClick={saveClickHandler}>Save</button>
           </div>
        </div>


        <div className="bioSection p-2">
          <div className="form-floating">
            <input id="first-name" value={firstName} placeholder={currentUser.firstName}
                  className="form-control border-1 "
                  onChange={(event) => setFirstName(event.target.value)}/>
            <label htmlFor="first-name">First Name</label>
          </div>
          <div className="form-floating mt-3">
            <input id="last-name" value={lastName} placeholder={currentUser.lastName}
                  className="form-control border-1 "
                  onChange={(event) => setLastName(event.target.value)}/>
            <label htmlFor="last-name">Last Name</label>
          </div>
            <div className="form-floating mt-3">
            <textarea id="email" value={email} placeholder={currentUser.email}
                      className="form-control border-1 "
                      onChange={(event) => setEmail(event.target.value)}/>
              <label htmlFor="email">Email</label>
            </div>
          <div className="form-floating mt-3">
          <textarea id="bio" value={biography} placeholder={currentUser.biography}
                    className="form-control border-1 "
                    onChange={(event) => setBiography(event.target.value)}/>
            <label htmlFor="bio">Bio</label>
          </div>
          <div className="form-floating mt-3">
            <input id="location" value={location} placeholder={currentUser.location}
                  className="form-control border-1"
                  onChange={(event) => setLocation(event.target.value)}/>
            <label htmlFor="location">Location</label>
          </div>
          <div className="form-floating mt-3">
            <input id="date-of-birth" value={dateOfBirth} placeholder={currentUser.dateOfBirth}
                  className="form-control border-1" type="date"
                  onChange={(event) => setDateOfBirth(event.target.value)}/>
            <label htmlFor="date-of-birth">Date of Birth</label>
          </div>
        </div>

      </div>
  );
};

export default EditProfile;