import {Link} from 'react-router-dom';
import React from "react";
import './employerhomestyle.css';

const EmployerHome = () => {
    return (
        <div className="row">
            <div className="search container background-image">
                <h1 className="search-heading">Connect With Top Talents</h1>
                <div className="search-button">
                    <Link to="/register" className="btn btn-dark" >
                        Register As Our Employer
                    </Link>
                </div>
            </div>

            <div className="container my-2">
                <div className="section-title">
                    <h2>Enlarge your talent pool to <br></br> our most diverse and active young talents</h2>
                </div>

                <div className="roomslist-center ">
                    <div className="div-background">
                        <h2 className="text-title">10M+</h2>
                        <div className="text-description">Active job seekers</div>
                    </div>
                    <div className="div-background">
                        <h2 className="text-title">750K+</h2>
                        <div className="text-description">Employers across the globe</div>
                    </div>
                    <div className="div-background">
                        <h2 className="text-title">90%</h2>
                        <div className="text-description">Top University Partners</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EmployerHome;