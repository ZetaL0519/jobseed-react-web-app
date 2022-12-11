import React, {useEffect, useState} from "react"
import {Link,  useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import { findJobById } from "../../../services/jobs-service";
import {updateJobThunk, findJobByIdThunk, findAllJobsThunk} from "../../../services/jobs-thunks";
import {useNavigate, Navigate} from "react-router";

const UpdateJob = () => {
    const {jid} = useParams()
    const navigate = useNavigate()

    const {currentUser} = useSelector((state) => state.users)

    const dispatch = useDispatch()
    const [currentjob, setCurrentJob] = useState(null)

    const findjob = (jid) => {
        findJobById(jid).then(j => {
            setCurrentJob(j)
            setJobTitle(j.jobtitle)
            setSalary(j.salary)
            setLocation(j.location)
            setCompanyname(j.companyname)
            setUrl(j.url)
            setSummary(j.summary)
        })
    }

    useEffect(() => {
        dispatch(findJobByIdThunk(jid))
        findjob(jid)
    }, [])
    

    const [jobtitle, setJobTitle] = useState("")
    const [salary, setSalary] = useState("")
    const [location, setLocation] = useState("")
    const [companyname, setCompanyname] = useState("")
    const [url, setUrl] = useState("")
    const [summary, setSummary] = useState("")

    const updateJobBtn = () => {
        const newJob = {...currentjob, jobtitle, companyname, location, salary, url, summary}
        try {
            dispatch(updateJobThunk(newJob))
            dispatch(findAllJobsThunk())
        } catch(e) {
            console.log("error:" + e)
        }
        navigate('/profile')
    }

    return (
        <div className="container">
            {currentjob && <div>
            <div> <Link to="/profile" className="ms-3 fg-white"><i className="fa fa-times"/></Link> <h2>Update Job</h2> </div>
                <form className="border-success">
                    <div>
                        <label htmlFor="job-title">Job Title</label>
                        <input className="form-control" value={jobtitle} id="job-title" placeholder="Job Title" onChange={(e) => setJobTitle(e.target.value)}/>

                    </div>
                    <div>
                        <label htmlFor="location">Location</label>
                        <input className="form-control" value={location} id="location" placeholder="Location" onChange={(e) => setLocation(e.target.value)}/>
                    </div>
                    <div >
                        <label htmlFor="companyname">Company Name</label>
                        <input className="form-control" id="companyname" value={companyname} placeholder="Company Name" onChange={(e) => setCompanyname(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="salary">Salary</label>
                        <input className="form-control" id="salary" value={salary} placeholder="Salary" onChange={(e) => setSalary(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="url">URL</label>
                        <input className="form-control" id="url" value={url} placeholder="URL" type="url" onChange={(e) => setUrl(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="summary">Summary</label>
                        <input className="form-control" id="summary" value={summary} placeholder="Summary" type="text" onChange={(e) => setSummary(e.target.value)}/>
                    </div>
                    <button className="btn btn-success mt-3" onClick={updateJobBtn}>
                        Save
                    </button>
                </form>
                </div>}
        </div>
    )
}

export default UpdateJob