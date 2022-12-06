import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createJobsThunk, deleteJobThunk, findAllJobsThunk} from "../../services/jobs-thunks";

const JobResult = () => {
    const {jobs} = useSelector((state) => state.jobs)
    const [job, setJob] = useState({jobtitle: 'New Job'})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllJobsThunk())
    }, [])
    return(
        <>
            <h1>Jobs</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button className="btn btn-success float-end" onClick={() => {
                        dispatch(createJobsThunk(
                            {
                                jobtitle: job.jobtitle
                            }
                        ))
                    }}>Create</button>
                    <input
                        className="form-control w-75"
                        onChange={(e) =>
                            setJob({...job, jobtitle: e.target.value})}
                        value={job.jobtitle}/>
                </li>
                {
                    jobs.map((job) =>
                        <li className="list-group-item"
                            key={job._id}>
                            <i onClick={() => {
                                dispatch(deleteJobThunk(job._id))
                            }}
                                className="bi bi-trash float-end"></i>

                            {job.companyname}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default JobResult;