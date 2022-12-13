import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk, logoutThunk, deleteUserThunk} from "../../services/users-thunks";

const DeleteButton = ({uid}) =>{
    const dispatch = useDispatch()

    const handleDeleteUserBtn = () => {
        console.log(uid)
        dispatch(deleteUserThunk(uid))
        window.location.reload()
    }
    return (
        <button className="btn btn-danger"
                onClick = {handleDeleteUserBtn}>
            Delete
        </button>
    )
}
export default DeleteButton