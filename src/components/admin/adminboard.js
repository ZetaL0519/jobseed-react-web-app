import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllUsersThunk} from "../../services/users-thunks";

const Users = () => {
    const {users, loading} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])

    const handleDeleteUserBtn = () => {
        dispatch()
    }
    return(
        <>
            <h1>{users.length } Registered Users </h1>
            <ul className="list-group">
                {
                    users.map((user) =>
                    <li key={user._id} className="list-group-item">
                        <div className="left-button">
                        {user.username}
                        </div>
                        <div className="right-button">
                        <button className="btn btn-danger"
                                onClick = {handleDeleteUserBtn}>
                            Delete
                        </button>
                        <button className="btn btn-success ml-5"
                                onClick = {handleDeleteUserBtn}>
                            Update
                        </button>
                        </div>
                    </li>
                    )
                }
            </ul>
        </>
    )
}

export default Users