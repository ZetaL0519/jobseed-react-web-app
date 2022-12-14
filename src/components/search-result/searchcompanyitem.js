import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import {userCollectJobThunk, userDisCollectJobThunk}  from "../../services/collect-thunks"
import { userApplyJobThunk, UserDeleteJobThunk } from "../../services/apply-thunks";
import {createFollowThunk, deleteFollowThunk, findFollowByUidThunk} from "../../services/follow-thunks";
// import {useNavigate, Navigate} from "react-router";
// import Apply from "../jobs/job-apply"
// import Collect from "../jobs/job-collection"
import "./search.style.css";

export const SearchcompanyItem = (state) => {

  // console.log(state.company.headquarters, "jjjjjj")
    const {currentUser} = useSelector((state) => state.users)
    // const collects = useSelector((state) => state.collects)
    const dispatch = useDispatch()

    // const { collects=[] } = useSelector((state) => state.collects);

    // const { applys=[] } = useSelector((state) => state.applys);

    // const isCollected = !!(collects?.filter((item) =>{
    //   // console.log(item, "dsdsds");
    //   if(item?.job?._id == job?._id && item.collectBy == currentUser._id){
    //       return true;
    //   }
    // }).length>0);
   
    // const isApplied = !!(applys?.filter((item) =>{
    //   // console.log(item, "dsdsds");
    //   if(item?.job?._id == job?._id && item.applyBy == currentUser._id){
    //       return true;
    //   }
    // }).length>0);

    // const [isCollect, setIsCollect] = useState(false);

    // useEffect(()=>{
    //   setIsCollect((isCollect)=>!isCollect);
    // },[isCollected])
  
    // useEffect(()=>{
    //   setIsCollect(isCollect);
    // },[isCollect])
    // const addCollectBtn = (_id) => {
    //   const collect = { uid: currentUser._id, jid: _id };
  
    //   if (
    //     !isCollect &&
    //     currentUser != null &&
    //     currentUser.accountType === 'SEEKER'
        
    //   ) {
    //     dispatch(userCollectJobThunk(collect));
     
    //   } else if (
    //     isCollect &&
    //     currentUser != null &&
    //     currentUser.accountType === 'SEEKER'
    //   ) {
    //     dispatch(userDisCollectJobThunk(collect));
      
    //   }
    //     setIsCollect(isCollect => !isCollect);
    //     window.location.reload();
     
     
    // };

    // const {follows} = useSelector((state) => state.);
    const {follows} = useSelector((state) => state.follows)

    // console.log(fol,"followsssss")

    const isFollowed = !!(follows?.filter((item) => {
      // console.log(item.follower._id === currentUser._id, "ssss")

      // console.log(item.follower._id,"item.follower._id")
      // console.log(currentUser._id, "currentUser._id")
        if (parseInt(item?.companyId) === state.company?.company_id && item.follower._id === currentUser._id) {
            return true;
        }
    }).length > 0);

    console.log(isFollowed, "isfolloedddd")
    const [isFollow, setIsFollow] = useState(isFollowed);

    useEffect(()=>{
        
      setIsFollow((isFollow)=>!isFollow);
    },[isFollowed]);

     useEffect(()=>{
      setIsFollow(isFollow);
    },[isFollow])

  

    const [companyId, setCompanyId] = useState(state.company.company_id)
    const [companyName, setCompanyName] = useState(state.company.company_name)
    const [headquarters, setHeadquarters] = useState(state.company.headquarters)
    const [industry, setIndustry] = useState(state.company.industry)
    const [company_size, setCompanySize] = useState(state.company.company_size)
    const [image_url, setImageURL] = useState(state.company.cover_image_url)
    const [website, setWebsite] = useState(state.company.website)
    const [about_us, setAboutUs] = useState(state.company.about_us)
    const newFollowComp = {companyId, companyName, headquarters, industry, company_size, image_url, website, about_us}


     const addApplyBtn = () => {

         const newfollow = {company: newFollowComp, uid: currentUser._id}
         const newDeleteFollow = {cid: companyId, uid: currentUser._id}
         if (
             !isFollow &&
             currentUser != null &&
             currentUser.accountType === 'SEEKER'
         ) {
           dispatch(createFollowThunk(newfollow));
         } else if (
            isFollow && currentUser != null && currentUser.accountType === 'SEEKER'
         ) {

           dispatch(deleteFollowThunk(newDeleteFollow))
         }
         setIsFollow(isFollow => !isFollow)
         window.location.reload()
     };

 
  return (
    <div className="card border-success mb-3">
      <div className="card-header bg-transparent border-success">
        <span className="left-button">{state.company.company_name}</span>

        <span className="right-button" >
      
          {/* {isCollect ? (
            <i id="myButton" className="bi bi-star-fill"></i>
          ) : (
            <i id="myButton" className="bi bi-star"></i>
          )} */}
        </span>
      </div>
      <div className="card-body text-success">
        <Link to={`/company/details/${state.company.profile_id}`} state={state.company} className="job-link">
          <h5 className="card-title">{state.company.company_name}</h5>
        </Link>
        <p className="card-text">{state.company.headquarters}</p>
        <p className="card-text">{state.company.industry}</p>
      </div>


     {
        currentUser !== null && currentUser.accountType === 'SEEKER' && <div className="card-footer bg-transparent border-success">
            {isFollow ? (
            <div>
              <button className="btn btn-success disabled left-button" type="submit">
                Followed
              </button>
              <button className="btn btn-danger ms-2 float-end right-button" type="submit" onClick={() => addApplyBtn()}>
                Unfollow
              </button>
            </div>
            )
              :
              (
              <div className="left-button">
                <button className="btn btn-success" type="submit" onClick={() => addApplyBtn()}>
                  Follow
                </button>
              </div>
            )
            }
            </div>
     }
    </div>
  );
};
