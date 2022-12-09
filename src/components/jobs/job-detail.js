import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {findJobByIdThunk} from "../../services/jobs-thunks";
import {SearchItem} from "../search-result/searchitem.js"

const JobDetail = () => {
    const {jid} = useParams();
    const {currentUser} = useSelector((state) => state.users);
    const {job} = useSelector((state) => state.job);
    console.log(job)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findJobByIdThunk(jid));
    }, [jid])

    return (
        <div class="container">
            <h2>{job.jobtitle}</h2>
            
        </div>
    )
}

export default JobDetail;