import React from "react";
import "./homesearchstyle.css";

const Search = () => {
    return (
        <div className="search container">
            <h1 className="search-heading">Find Your Ideal Job</h1>
            <div className="search-job-location">
                <div className="row">
                    <div className="search-bar">
                        <input className="" type="text" placeholder="Enter Title" value=""/>
                        <i className="bi bi-search"></i>
                    </div>

                    <div className="search-bar">
                        <input className="" type="text" placeholder="Enter location" value=""/>
                        <i className="bi bi-search"></i>
                    </div>
                </div>
            </div>
            <div className="search-button">
                <button className="btn btn-outline-success">
                    Find
                </button>
            </div>
        </div>
    )
}
export default Search;