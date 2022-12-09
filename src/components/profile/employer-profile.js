import React, {useEffect, useState} from "react"
import {Link,  useParams} from "react-router-dom"
import "./user-profile-style.css";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../../services/users-thunks";
import {createJobsThunk} from "../../services/jobs-thunks";
import {useNavigate} from "react-router";

const EmployerProfile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }

    const [jobtitle, setJobTitle] = useState('')
    const [salary, setSalary] = useState('')
    const [location, setLocation] = useState('')
    const [companyname, setCompanyname] = useState('')
    const [url, setUrl] = useState('')
    const [summary, setSummary] = useState('')
    const [email, setEmail] = useState('')

    const createJobBtn = () => {
        const date = (new Date()).getTime() + ''
        const newJob = {jobtitle, date, companyname, email, location, salary, url, summary}
        dispatch(createJobsThunk(newJob))

    }

    return (
            <div className="user-profile container">
                <button
                    className="btn btn-danger"
                    onClick={handleLogoutBtn}>
                    Logout
                </button>
                <Link to="/profile/edit" className="btn btn-success">Update Profile</Link>
                <h1>
                    Welcome to {currentUser.firstName} {currentUser.lastName}'s Profile
                </h1>
                <div className="font-bold">
                    User Role: {currentUser.accountType}
                </div>
                <div className="bioSection p-2">
                    <p className="fg-white pt-2">
                        {currentUser.bio}
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

                <ul className="list-group">
                    <div className="list-group-item form-floating">
                        <input id="job-title" placeholder="Job Title" onChange={(e) => setJobTitle(e.target.value)}/>
                        <label htmlFor="job-title"></label>
                    </div>
                    <div className="list-group-item form-floating mt-3">
                        <input id="location" placeholder="Location" onChange={(e) => setLocation(e.target.value)}/>
                        <label htmlFor="location"></label>
                    </div>
                    <div className="list-group-item form-floating mt-3">
                        <input id="companyname" placeholder="Company Name" onChange={(e) => setCompanyname(e.target.value)}/>
                        <label htmlFor="companyname"></label>
                    </div>
                    <div className="list-group-item form-floating mt-3">
                        <input id="salary" placeholder="Salary" onChange={(e) => setSalary(e.target.value)}/>
                        <label htmlFor="salary"></label>
                    </div>
                    <div className="list-group-item form-floating mt-3">
                        <input id="url" placeholder="URL" type="url" onChange={(e) => setUrl(e.target.value)}/>
                        <label htmlFor="url"></label>
                    </div>
                    <div className="list-group-item form-floating mt-3">
                        <input id="summary" placeholder="Summary" type="text" onChange={(e) => setSummary(e.target.value)}/>
                        <label htmlFor="summary"></label>
                    </div>
                    <li className="list-group-item">
                        <button className="btn-success float-end">
                            Create
                        </button>
                    </li>
                </ul>
            </div>

    )
}

export default EmployerProfile