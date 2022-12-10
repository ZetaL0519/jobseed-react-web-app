import {createJobsThunk} from "../../services/jobs-thunks.js"
import {current} from "@reduxjs/toolkit";
import {Navigate,useNavigate} from "react-router";

const CreateJob = () => {
    const {jobs} = useSelector((state) => state.jobs)
    const {currentUser} = useSelector((state) => state.users)
    const [jobtitle, setJobtitle] = useState()
    const [companyname, setCompanyname] = useState()
    const [location, setLocation] = useState()
    const [salary, setSalary] = useState()
    const [url, setUrl] = useState()
    const [summary, setSummary] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const hanleCreateJob = () => {
        const newJob = {jobtitle, companyname, location, salary, url, summary}
        dispatch(createJobsThunk(newJob))
        return (<Navigate to={'/profile'}/>)
    }

    return (
        <div className="container">
            <h2>Create New Job</h2>
                <div className="form-group row">
                    <label htmlFor="inputJobtitle"
                           className="sr-only">
                        Job Title
                    </label>
                    <div className="col-sm-8">
                        <input type="text"
                               onChange={(e) => setJobtitle(e.target.value)}
                               className="form-control"
                               id="inputJobtitle"
                               name="job_title"
                               placeholder="Job Title"
                               required autoFocus />
                    </div>
                    <label htmlFor="inputCompanyName"
                           className="sr-only">
                        Company Name
                    </label>
                    <div className="col-sm-8">
                        <input type="text"
                               onChange={(e) => setCompanyname(e.target.value)}
                               className="form-control"
                               id="inputCompanyName"
                               name="company_name"
                               placeholder="Company Name"
                               required autoFocus />
                    </div>
                    <label htmlFor="inputLocation"
                           className="sr-only">
                        Location
                    </label>
                    <div className="col-sm-8">
                        <input type="text"
                               onChange={(e) => setLocation(e.target.value)}
                               className="form-control"
                               id="inputLocation"
                               name="location"
                               placeholder="Location"
                               />
                    </div>
                    <label htmlFor="inputSalary"
                           className="sr-only">
                        Salary
                    </label>
                    <div className="col-sm-8">
                        <input type="text"
                               onChange={(e) => setSalary(e.target.value)}
                               className="form-control"
                               id="inputSalary"
                               name="salary"
                               placeholder="Salary"
                               />
                    </div>
                    <label htmlFor="inputUrl"
                           className="sr-only">
                        Url
                    </label>
                    <div className="col-sm-8">
                        <input type="text"
                               onChange={(e) => setUrl(e.target.value)}
                               className="form-control"
                               id="inputUrl"
                               name="url"
                               placeholder="URL"
                               />
                    </div>
                    <label htmlFor="inputSummary"
                           className="sr-only">
                        Summary
                    </label>
                    <div className="col-sm-8">
                        <input type="text"
                               onChange={(e) => setSummary(e.target.value)}
                               className="form-control"
                               id="inputSummary"
                               name="summary"
                               placeholder="Summary"
                               />
                    </div>

                </div>
        </div>
    )
}