import {React, useEffect, useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {findJobBySearchTermThunk} from "../services/search-jobs-thunks";
import "./headerstyle.css";

const Header = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const dispatch = useDispatch()
    const handleSearchBtn = () => {
        dispatch(findJobBySearchTermThunk({
            searchTerm
        }
        ))
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand title-color" to="/">JobSeed</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-menu collapse navbar-collapse" id="navbarSupportedContent">

            <div className="row">
                <div className="col-11">
                    <input className="form-control" value={searchTerm} type="text" onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div className="col-1">
                  <Link to={`/search/${searchTerm}`} className="btn btn-outline-success my-2 my-sm-0" onClick={handleSearchBtn}>
                  <i className="fas fa-search"></i>
                  </Link>
                </div>

            </div>
            <ul className="navbar-nav float-right ">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/employer" className="nav-link">Employer</Link>
              </li>
              <li className="nav-item">
                <Link to="/jobs" className="nav-link">Jobs</Link>
              </li>
            </ul>

           <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <i className="fas fa-user-circle"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link to="/login" className="dropdown-item">Log In</Link>
                  <Link to="/register" className="dropdown-item">Register</Link>
                  <Link to="/profile" className="dropdown-item">Profile</Link>
                </Dropdown.Menu>
           </Dropdown>
          </div>
        </nav>
        </>
    )
};

export default Header;