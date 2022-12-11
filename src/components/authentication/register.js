import './authstyle.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../../services/users-thunks.js";
import {current} from "@reduxjs/toolkit";
import {Navigate,useNavigate} from "react-router";

const Register = () => {
    const {currentUser, isLoggedIn} = useSelector((state) => state.users)
    const [username, setUsername] = useState('alice123')
    const [firstName, setFirstName] = useState('alice')
    const [lastName, setLastName] = useState('wonder')
    const [dateOfBirth, setdateOfBirth] = useState('01/01/2002')
    const [email, setemail] = useState('alice@gmail')
    const [password, setPassword] = useState('123123')
    const [confirmPassword, setConfirmPassword] = useState('123123')
    const [error, setError] = useState(null)
    const [accountType, setaccountType] = useState('SEEKER');

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleRegisterBtn = () => {
        if (password !== confirmPassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        const newUser = {username, password, firstName, lastName, email,dateOfBirth, accountType}
        dispatch(registerThunk(newUser)).then(navigate('/profile'))
    }

    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

    return (
        <div className="container">
            <div className="signup-form">
                <form action="">
                    <h2 className="text-center">
                        Register
                    </h2>
                    <hr />
                    <div className="form-group row">
                        <label htmlFor="inputFirstName"
                               className="sr-only">
                            First Name
                        </label>
                        <div className="col-sm-6">
                            <input type="text"
                                   onChange={(e) => setFirstName(e.target.value)}
                                   className="form-control"
                                   id="inputFirstName"
                                   name="first_name"
                                   placeholder="First Name"
                                   required autoFocus />
                        </div>
                        <label htmlFor="inputLastName"
                               className="sr-only">
                            Last Name
                        </label>
                        <div className="col-sm-6">
                            <input type="text"
                                   onChange={(e) => setLastName(e.target.value)}
                                   className="form-control"
                                   id="inputLastName"
                                   name="last_name"
                                   placeholder="Last Name"
                                   required />
                        </div>
                    </div>
                    <div className="form-group">
                <span className="form-control-icon">
                    <i className="fa fa-user"
                       aria-hidden="true"></i>
                </span>
                        <label htmlFor="inputUsername"
                               className="sr-only">
                            Username</label>
                        <input className="form-control"
                               onChange={(e) => setUsername(e.target.value)}
                               id="inputUsername"
                               type="text" name="username"
                               placeholder="Username"
                               required />
                    </div>
                    <div className="form-group">
                <span className="form-control-icon">
                    <i className="fa fa-calendar"
                       aria-hidden="true"></i>
                </span>
                        <label htmlFor="inputDOB"
                               className="sr-only">
                            Date
                        </label>
                        <input className="form-control"
                               onChange={(e) => setdateOfBirth(e.target.value)}
                               type="date"
                               id="inputDOB"
                               data-inputmask="'alias': 'date'" />
                    </div>
                    <div className="form-group">
                <span className="form-control-icon">
                    <i className="fas fa-envelope"></i>
                </span>
                        <label htmlFor="inputEmail"
                               className="sr-only">
                            Email address
                        </label>
                        <input className="form-control"
                               onChange={(e) => setemail(e.target.value)}
                               id="inputEmail"
                               type="email"
                               name="email"
                               placeholder="Email"
                               required />
                    </div>

                    <div className="form-group">
                <span className="form-control-icon">
                    <i className="fas fa-key"></i>
                </span>
                        <label htmlFor="inputPassword"
                               className="sr-only">
                            Password</label>
                        <input className="form-control"
                               onChange={(e) => setPassword(e.target.value)}
                               id="inputPassword"
                               type="password"
                               placeholder="Password"
                               required />
                    </div>
                    <div className="form-group">
                    <span className="form-control-icon">
                        <i className="fas fa-key"></i>
                    </span>
                        <label htmlFor="inputConfirmPassword"
                               className="sr-only">
                            Confirm Password</label>
                        <input className="form-control"
                               onChange={(e) => setConfirmPassword(e.target.value)}
                               id="inputConfirmPassword"
                               type="password"
                               placeholder="Confirm Password"
                               required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="selectRole">
                            Register As &nbsp;
                        </label>
                        <select id="selectRole"
                                className="col-sm-5"
                                name="role"
                                onChange={(e) => setaccountType(e.target.value)}
                                required
                                >
                            <option value="SEEKER"
                                   >
                                Seeker
                            </option>
                            <option value="EMPLOYER">
                                Employer
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="checkbox-inline">
                            <input type="checkbox" required />
                            &nbsp;I accept the&nbsp;
                            <span>
                                Term of Use
                            </span>
                            &nbsp;&&nbsp;
                            <span>
                                Privacy Policy
                            </span>
                        </label>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success btn-block"
                                type="submit"
                                onClick={handleRegisterBtn}>
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className="hint-text">
                    Already have an account?&nbsp;
                    <Link to="/login">
                        Login here
                    </Link>
                </div>
                <div className="hint-text">
                    <Link to="/">
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register;