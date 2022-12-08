import './authstyle.css';
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../services/users-thunks.js";
import {useNavigate} from "react-router";

const LogIn = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState(false);
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()

    const handleLoginBtn = () => {
        const loginUser = {username, password, isAdmin};
        dispatch(loginThunk(loginUser))
        setError(null)
        navigate('/profile')
        if (loginUser.isAdmin){
            navigate('/admin')
        } else {
            navigate('/profile')
        }

    };
    return (
        <div className="container">
            <div className="login-form">
                <form action="">
                    <h2 className="text-center">Log In</h2>
                    <hr />
                    <div className="form-group">
                <span className="form-control-icon">
                    <i className="bi bi-person-fill"></i>
                </span>
                        <label htmlFor="inputUsername" className="sr-only">username</label>
                        <input className="form-control"
                               id="inputUsername"
                               type="username"
                               placeholder="Username"
                               onChange={(e) => setUsername(e.target.value)}
                               required autoFocus />
                    </div>
                    <div className="form-group">
                <span className="form-control-icon">
                    <i className="fas fa-key"></i>
                </span>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input className="form-control"
                               id="inputPassword"
                               type="password"
                               placeholder="Password"
                               onChange={(e) => setPassword(e.target.value)}
                               required />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success btn-block"
                                type="submit"
                                onClick={handleLoginBtn}>
                            Log in
                        </button>
                    </div>
                    <div className="form-group d-flex justify-content-between">
                        <label className="checkbox-inline">
                            <input type="checkbox"
                                   value="remember-me" />
                            &nbsp;Remember me
                        </label>
                        <a href="#">
                            Forgot Password
                        </a>
                    </div>
                </form>
                <div className="hint-text">
                    New to here?&nbsp;
                    <Link to="/register">
                        Sign Up
                    </Link>
                </div>
                <div className="hint-text">
                    <Link to="/">
                        Cancel
                    </Link>
                </div>
            </div>
            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }
        </div>
    )
}

export default LogIn;