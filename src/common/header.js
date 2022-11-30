import React from "react";
import "./headerstyle.css";

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">JobSeed</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-menu collapse navbar-collapse" id="navbarSupportedContent">

            <div className="row">
                <div className="col-11">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                </div>
                <div className="col-1">
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                  <i className="fas fa-search"></i>
                  </button>
                </div>

            </div>

            <ul className="navbar-nav float-right ">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sign In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Log In</a>
              </li>
            </ul>

          </div>
        </nav>
        </>
    )
};

export default Header;