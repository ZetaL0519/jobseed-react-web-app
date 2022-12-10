import React, {useEffect, useState} from "react"
import {Link,  useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {createJobsThunk} from "../../services/jobs-thunks";
import {useNavigate} from "react-router";

export const CreateJob = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()

    const [jobtitle, setJobTitle] = useState('')
    const [salary, setSalary] = useState('')
    const [location, setLocation] = useState('')
    const [companyname, setCompanyname] = useState(currentUser.companyname)
    const [url, setUrl] = useState('')
    const [summary, setSummary] = useState('')
    const [email, setEmail] = useState('')
    const uid = currentUser._id
    const createJobBtn = () => {
        const date = (new Date()).getTime() + ''
        const newJob = {jobtitle, date, companyname, email, location, salary, url, summary}
        console.log(newJob)
        console.log(uid)
        const createJob = {newJob: newJob, uid: uid}
        try {
            dispatch(createJobsThunk(createJob))
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <div className="container">
            <div> <Link to="/profile" className="ms-3 fg-white"><i className="fa fa-times"/></Link> <h2>Create New Job</h2> </div>
                <form className="border-success">
                    <div>
                        <label htmlFor="job-title">Job Title</label>
                        <input className="form-control" id="job-title" placeholder="Job Title" onChange={(e) => setJobTitle(e.target.value)}/>

                    </div>
                    <div>
                        <label htmlFor="location">Location</label>
                        <input className="form-control" id="location" placeholder="Location" onChange={(e) => setLocation(e.target.value)}/>
                    </div>
                    <div >
                        <label htmlFor="companyname">Company Name</label>
                        <input className="form-control" id="companyname" placeholder="Company Name" onChange={(e) => setCompanyname(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="salary">Salary</label>
                        <input className="form-control" id="salary" placeholder="Salary" onChange={(e) => setSalary(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="url">URL</label>
                        <input className="form-control" id="url" placeholder="URL" type="url" onChange={(e) => setUrl(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="summary">Summary</label>
                        <input className="form-control" id="summary" placeholder="Summary" type="text" onChange={(e) => setSummary(e.target.value)}/>
                    </div>
                    <button className="btn btn-success mt-3" onClick={createJobBtn}>
                        Create
                    </button>
                </form>
        </div>
    )

};
