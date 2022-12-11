import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react";
import { findOneCollectJob} from "../../services/collect-service";
import {findOneCollectThunk, userCollectJobThunk} from "../../services/collect-thunks";

const Collect = ({uid, jid}) => {
    const dispatch = useDispatch()
    const [IsCollect, setCollect] = useState(null);
    const [click, setClick] = useState(true);
    const collect = {
        uid: uid,
        jid: jid
    }

    const findCollect = () => {
        findOneCollectJob(collect.uid, collect.jid).then(c => setCollect(c))
    }

    useEffect(() => {
        findCollect()
    }, [click])

    const handleCollect = () => {
        dispatch(userCollectJobThunk(collect))
        setCollect(!click)
        window.location.reload()
    }

    if (IsCollect) {
        console.log(1)
        return(
            <span className="right-button">
                <i className="bi bi-star-fill fa-1x"></i>
            </span>
        )
    } else {
        return (
            <span className="right-button" onClick = {handleCollect}>
                <i className="bi bi-star fa-1x"></i>
            </span>
        )
    }
}

export default Collect;
