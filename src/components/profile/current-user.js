import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../../services/users-thunks";

const CurrentUser = ({children}) => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    }, [])
    return(children)
}

export default CurrentUser