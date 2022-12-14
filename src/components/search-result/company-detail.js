import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link,  useParams, useLocation} from "react-router-dom"
import {findJobByIdThunk} from "../../services/jobs-thunks";
import { findAllUserApplyJobThunk } from "../../services/apply-thunks";
// import Apply from "./job-apply";
// import {UserCard} from "./publicUsers"
import "./job.css"

const CompanyDetail = () => {

    
    const location = useLocation();
    const company = location.state
    console.log(location.state, "location stae")
    
    const {jid} = useParams();
    const {currentUser} = useSelector((state) => state.users);
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(findJobByIdThunk(jid));
    //     dispatch(findAllUserApplyJobThunk(jid))
    // }, [jid])
    const {currentjob} = useSelector((state) => state.jobs);
    const {usersapplyjob} = useSelector((state) => state.applys);

    return (
        <div className="container">
            {/* {currentjob &&  */}
            <div  className="job-container">  
                <h2>{company.company_name}</h2>
                <br/>
                <div className="job-detail">
                <p className="text-success">    <span className="bi bi-file-post"> </span>{company.industry} </p>
                <p className="text-success">    <span className="bi bi-calendar2-fill"> </span>{company.company_size}</p>
                <p className="text-success">    <span className="bi bi-building-fill"> </span>{company.website}</p>
                {/* <p className="text-success">    <span className="bi bi-bank"> </span>{company.}</p> */}
                <img src={company.image_url}></img>
                {/* <p className="text-success">Posted By <span><Link className="postedBy" to={`/profile/${currentjob.postBy._id}`}><i className="bi bi-person-circle"></i>{currentjob.postBy.username}</Link></span></p>  */}
                <br/>
                {/* {currentUser && currentUser.accountType === "SEEKER" && <Apply uid={currentUser._id} jid={jid}/>} */}
                <br/>
                <br/>
                <h2>About us</h2>
                <p> {company.about_us}</p>
                {/* <h2>Who Followed</h2> */}
                {/* <div className="roomslist-center">
                {usersapplyjob && usersapplyjob.map(apply => {
                    return <UserCard user={apply.applyBy} key={apply._id}/>
                })}
                </div> */}
                </div>

            </div>
            
            
            {/* } */}
            
            
            
            
        </div>
    )
}

export default CompanyDetail;