import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { userApplyJobThunk, findOneApplyThunk } from "../../services/apply-thunks";

const Apply = ({uid, jid}) => {
    const dispatch = useDispatch()
    const apply = {
        uid: uid,
        jid: jid
    }
    useEffect(() => {
        dispatch(findOneApplyThunk(apply));
    }, [])

    const handleApply = () => {
        dispatch(userApplyJobThunk(apply))
    }
    const {currentapply} = useSelector((state) => state.applys)
    return (
        <div>
            {currentapply && <div className="left-button">
                    <button className="btn btn-secondary"
                            type="submit" 
                            >
                        Applyed
                    </button>
            </div>}
            {currentapply === null && <div className="left-button">
                    <button className="btn btn-success"
                            type="submit" onClick={handleApply}
                            >
                        Apply
                    </button>
            </div>}
        </div>
    )
}

export default Apply;