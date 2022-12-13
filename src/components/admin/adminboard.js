import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from "react-router-dom"
import {findAllUsersThunk, logoutThunk, deleteUserThunk} from "../../services/users-thunks";
import {useNavigate} from "react-router";

const Users = () => {
    const navigate = useNavigate()
    const {currentUser,users} = useSelector((state) =>state.users)
    // const currentUser = useSelector((state)=>state.users)
 
    useEffect(() => {
        if (!currentUser.isAdmin){
            navigate('/profile')
        }
    }, [navigate, currentUser])



    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }

    const handleDeleteUserBtn = (uid) => {
        dispatch(deleteUserThunk(uid))
    }

    const handleUpdateUserBtn = () => {

    }

    return(
        <>
            <h1>{users.length } Registered Users
            <button
                 className="btn btn-danger"
                 onClick={handleLogoutBtn}>
                 Logout
            </button></h1>
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
                        <Link to={`/admin/update/${user._id}`}>
                        <button className="btn btn-success ml-5">
                            Update
                        </button></Link>
                        </div>
                    </li>
                    )
                }
            </ul>
        </>
    )
}

export default Users