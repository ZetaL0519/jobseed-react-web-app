import React from 'react'
import {Link} from 'react-router-dom'
import './authstyle.css'

const RegisterEmployer = () => {
    return (
        <div className="container">
            <div className="signup-form">
            <form action="">
                <h2 className="text-center">Register</h2>

                <hr />
                <div className="form-group">
                <span className="form-control-icon">
                    <i className="bi bi-buildings-fill"></i>
                </span>
                <label htmlFor="inputCompanyName"
                       className="sr-only">
                    Company Name
                </label>
                <input className="form-control"
                       id="inputCompanyName"
                       type="companyname"
                       name="companyname"
                       placeholder="Company Name"
                       required />
                </div>


                <div className="form-group">
                <span className="form-control-icon">
                    <i className="fas fa-envelope"></i>
                </span>
                <label htmlFor="inputEmail"
                       className="sr-only">
                    Email address
                </label>
                <input className="form-control"
                       id="inputEmail"
                       type="email"
                       name="email"
                       placeholder="Email"
                       required />
                </div>
                <div className="form-group">
                <span className="form-control-icon">
                    <i className="fas fa-phone"
                       aria-hidden="true">
                    </i>
                </span>
                <label htmlFor="inputPhone"
                       className="sr-only">
                    Phone Number
                </label>
                <input className="form-control"
                       id="inputPhone"
                       type="tel"
                       name="phone"
                       placeholder="Phone Number"
                       required />
                </div>
                    <div className="form-group">
                <span className="form-control-icon">
                    <i className="fas fa-key"></i>
                </span>
                        <label htmlFor="inputPassword"
                               className="sr-only">
                            Password</label>
                        <input className="form-control"
                               id="inputPassword"
                               type="password"
                               placeholder="Password"
                               required />
                    </div>
                    <div className="form-group">
                <span className="form-control-icon">
                    <i className="fas fa-key"></i>
                </span>
                        <label htmlFor="inputConfirmPassword"
                               className="sr-only">
                            Confirm Password</label>
                        <input className="form-control"
                               id="inputConfirmPassword"
                               type="password"
                               placeholder="Confirm Password"
                               required />
                </div>
            </form>
            </div>
        </div>
    )
};

export default RegisterEmployer;