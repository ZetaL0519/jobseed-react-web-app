import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../../services/users-thunks";

const CurrentUser = ({children}) => {
    const {currentUser, loading} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    }, [])
    if (!loading) {
        return(children)
    } else {
        return null
    }
}

export default CurrentUser