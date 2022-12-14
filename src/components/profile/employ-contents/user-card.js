import {Link,  useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import "../../search-result/search.style.css";
import {UpdateAcceptJobThunk, findAllUserApplyJobThunk} from "../../../services/apply-thunks.js";

export const UserCard = ({apply}) => {
    const [accept, setAccept] = useState('pending')
    const dispatch = useDispatch()

    const handleAcceptBtn = () => {
        setAccept("accept")
        const {applyBy,job,_id} = apply;
        console.log(accept);
        const newApply = {applyBy,job,_id, accept}
        dispatch(UpdateAcceptJobThunk(newApply))
    }

    const handleDeclineBtn = () => {
        setAccept("decline")
        const {applyBy,job,_id} = apply;
        console.log(accept);
        const newApply = {applyBy,job,_id, accept}
        dispatch(UpdateAcceptJobThunk(newApply))
    }

    useEffect(() => {
        setAccept(accept)
    }, [accept])



    return(
        <div className="card border-primary mb-3 cardsize">
              <div className="card-header bg-transparent border-primary">
              <span className="left-button">{apply.applyBy.firstName} {apply.applyBy.lastName}</span>
              </div>
              <div className="card-body text-primary">
                <Link to={`/profile/${apply.applyBy._id}`} className="job-link">
                    <h5 className="card-title"><span className="bi bi-person-bounding-box"></span> {apply.applyBy.username}</h5>
                </Link>
                <p className="card-text">{apply.applyBy.email}</p>
                <p className="card-text">{apply.applyBy.biography}</p>
              </div>
    
              <div className="card-footer bg-transparent border-primary">
                     <div className="left-button">
                        <button onClick={handleAcceptBtn} className="btn btn-danger">Accept</button>
                    </div>
                    <div className="right-button">
                        <button onClick={handleDeclineBtn} className="btn btn-dark">Decline</button>
                   </div>
              </div>
        </div>
    )

}
