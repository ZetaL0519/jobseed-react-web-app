import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useParams, useLocation} from "react-router-dom"
import {findJobBySearchTermThunk} from "../../services/search-jobs-thunks";
// import {userCollectJobThunk, userDisCollectJobThunk}  from "../../services/collect-thunks"
import {SearchcompanyItem} from "./searchcompanyitem.js"
import "./search.style.css";
import {findFollowByUidThunk} from "../../services/follow-thunks";


const SearchcompanyResult = (searchInput = '') => {
    const {searchTerm} = useParams()
    const { currentUser } = useSelector((state) => state.users);
    const location = useLocation();

    const dispatch = useDispatch()
     useEffect(() => {
          if (currentUser !== null) {
          dispatch(findFollowByUidThunk(currentUser._id))
          }
     }, [])

    // const {jobs} = useSelector((state) => state.searchjobs)
      const company = location.state;
      console.log(company, "aaaaaaa")
    return (
       <div className="container">
            <h1> Company Search Results for {company.company_name}</h1>

            <div className="search-result-grid mt-3">
                <div className="roomslist-center">

                    {/* { */}
                       {/* companys.map( company=> */}
                       <SearchcompanyItem key={company.profile_id} company={company}/>
                       {/* ) */}
                    {/* } */}
                </div>
            </div>
        </div>
    )
};

export default SearchcompanyResult;