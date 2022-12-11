import {Link,  useParams} from "react-router-dom"
import "../search-result/search.style.css";

export const UserCard = (user) => {

    return(
        <div className="card border-success mb-3 cardsize">
              <div className="card-header bg-transparent border-success">
              <span className="left-button name">{user.user.firstName} {user.user.lastName}</span>
              </div>
              <div className="card-body text-success">
                <Link to={`/profile/${user.user._id}`} className="job-link">
                    <h5 className="card-title"><span className="bi bi-person-bounding-box"></span> {user.user.username}</h5>
                </Link>
                <p className="card-text">{user.user.email}</p>
                <p className="card-text">{user.user.biography}</p>
              </div>
              <div className="card-footer bg-transparent border-success">
                     <div className="left-button">
                    </div>
                    <div className="right-button">
                   </div>
              </div>
        </div>
    )

}
