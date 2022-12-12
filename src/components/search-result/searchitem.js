import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import {userCollectJobThunk, userDisCollectJobThunk}  from "../../services/collect-thunks"
import { userApplyJobThunk, UserDeleteJobThunk } from "../../services/apply-thunks";
// import {useNavigate, Navigate} from "react-router";
// import Apply from "../jobs/job-apply"
// import Collect from "../jobs/job-collection"
import "./search.style.css";

export const SearchItem = ({job}) => {
    const {currentUser} = useSelector((state) => state.users)
    // const collects = useSelector((state) => state.collects)
    const dispatch = useDispatch()

    const { collects=[] } = useSelector((state) => state.collects);

    const { applys=[] } = useSelector((state) => state.applys);

    const isCollected = !!(collects?.filter((item) =>{
      // console.log(item, "dsdsds");
      if(item?.job?._id == job?._id && item.collectBy == currentUser._id){
          return true;
      }
    }).length>0);
  
    console.log(applys, "applyss");
   
    const isApplied = !!(applys?.filter((item) =>{
      console.log(item, "dsdsds");
      if(item?.job?._id == job?._id && item.applyBy == currentUser._id){
          return true;
      }
    }).length>0);

    const [isCollect, setIsCollect] = useState(isCollected);

    useEffect(()=>{
      setIsCollect((isCollect)=>!isCollect);
    },[isCollected])
  
    useEffect(()=>{
      setIsCollect(isCollect);
    },[isCollect])
    const addCollectBtn = (_id) => {
      const collect = { uid: currentUser._id, jid: _id };
  
      if (
        !isCollect &&
        currentUser != null &&
        currentUser.accountType === 'SEEKER'
        
      ) {
        dispatch(userCollectJobThunk(collect));
     
      } else if (
        isCollect &&
        currentUser != null &&
        currentUser.accountType === 'SEEKER'
      ) {
        dispatch(userDisCollectJobThunk(collect));
      
      }
        setIsCollect(isCollect => !isCollect);
        window.location.reload();
     
     
    };
  
  
    console.log(isApplied, "isapplied")
    const [isApply, setIsApply] = useState(isApplied);
    console.log(isApply, "apply")
    useEffect(()=>{
      setIsApply((isApply)=>!isApply);
    },[isApplied])
    const addApplyBtn = (_id) => {
      const apply = {uid: currentUser._id, jid: _id};
      if (
          !isApply &&
          currentUser != null &&
          currentUser.accountType === 'SEEKER'
        ) {
          dispatch(userApplyJobThunk(apply));
        } else if (
          isApply &&
          currentUser != null &&
          currentUser.accountType === 'SEEKER'
        ) {
          dispatch(UserDeleteJobThunk(apply));
        }
        
        setIsApply(isApply => !isApply);
        window.location.reload();
    };

 
  return (
    <div className="card border-success mb-3">
      <div className="card-header bg-transparent border-success">
        <span className="left-button">{job.companyname}</span>

        <span className="right-button" onClick={() => addCollectBtn(job._id)}>
      
          {isCollect ? (
            <i id="myButton" className="bi bi-star-fill"></i>
          ) : (
            <i id="myButton" className="bi bi-star"></i>
          )}
        </span>
      </div>
      <div className="card-body text-success">
        <Link to={`/jobs/${job._id}`} className="job-link">
          <h5 className="card-title">{job.jobtitle}</h5>
        </Link>
        <p className="card-text">{job.location}</p>
        <p className="card-text">{job.salary}</p>
      </div>
      <div className="card-footer bg-transparent border-success">
        <div className="left-button" onClick={() => addApplyBtn(job._id)}>
        {!isApply ? (
          <button className="btn btn-success" type="submit">
          
            Apply
          </button>)
          :
          (
          <button className="btn btn-danger" type="submit">
          Applied
          </button>)
        }
        </div>
      </div>
    </div>
  );
};





    // const navigate = useNavigate()


    // return (
    //     <div className="card border-success mb-3">
    //           <div className="card-header bg-transparent border-success">
    //           <span className="left-button">{job.companyname}</span>
    //           {currentUser && currentUser.accountType ==="SEEKER" && <Collect uid={currentUser._id} jid={job._id} />}
    //           </div>
    //           <div className="card-body text-success">
    //             <Link to={`/jobs/details/${job._id}`} className="job-link">
    //                 <h5 className="card-title">{job.jobtitle}</h5>
    //             </Link>
    //             <p className="card-text">{job.location}</p>
    //             <p className="card-text">{job.salary}</p>
    //           </div>

    //           {
    //             currentUser && currentUser.accountType === "SEEKER" &&
    //               <div className="card-footer bg-transparent border-success">
    //                      <div>
    //                      <Apply uid={currentUser._id} jid={job._id}/>
    //                     </div>
    //               </div>
    //           }


    //     </div>
    // )
// }