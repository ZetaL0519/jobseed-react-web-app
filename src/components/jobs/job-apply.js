import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { findOneApply } from "../../services/apply-service";
import { findOneApplyThunk, userApplyJobThunk } from "../../services/apply-thunks";

const Apply = ({uid, jid}) => {
    const dispatch = useDispatch()
    const [applyed, setapply] = useState(null);
    const [click, setClick] = useState(true);
    const apply = {
        uid: uid,
        jid: jid
    }
    const findApply = () => {
        findOneApply(apply.uid, apply.jid).then(a=> setapply(a))
    }

    useEffect(() => {
        findApply()
    }, [click])

    const handleApply = () => {
        dispatch(userApplyJobThunk(apply))
        setClick(!click)
        window.location.reload()
    }
    
    if(applyed){
        return (
            <div className="left-button">
                    <button className="btn btn-secondary"
                            type="submit" 
                            >
                        Applyed
                    </button>
            </div>
        )
    }else{
        return (
            <div className="left-button">
                    <button className="btn btn-success"
                            type="submit" onClick={handleApply}
                            >
                        Apply
                    </button>
            </div>
        )
    }
    
    // return (
    //     <div>
    //         {currentapply && currentapply.applyBy._id === uid && currentapply.job._id === jid && <div className="left-button">
    //                 <button className="btn btn-secondary"
    //                         type="submit" 
    //                         >
    //                     Applyed
    //                 </button>
    //         </div>}
    //         {currentapply === null && <div className="left-button">
    //                 <button className="btn btn-success"
    //                         type="submit" onClick={handleApply}
    //                         >
    //                     Apply
    //                 </button>
    //         </div>}
    //         {currentapply && currentapply.job._id !== jid && <div className="left-button">
    //                 <button className="btn btn-success"
    //                         type="submit" onClick={handleApply}
    //                         >
    //                     Apply
    //                 </button>
    //         </div>}
    //         {currentapply && currentapply.applyBy._id !== uid && <div className="left-button">
    //                 <button className="btn btn-success"
    //                         type="submit" onClick={handleApply}
    //                         >
    //                     Apply
    //                 </button>
    //         </div>}
    //     </div>
    // )
}

export default Apply;