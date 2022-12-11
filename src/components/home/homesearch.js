import {React, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {findJobByLocationTitleTermThunk} from "../../services/search-jobs-thunks";
import "./homesearchstyle.css";

const Search = () => {

    const [Location, setLocation] = useState('')
    const [Title, setTitle] = useState('')
    const dispatch = useDispatch()
    const handleSearchBtn = () => {
        dispatch(findJobByLocationTitleTermThunk({
            Location
        }, {Title}))
    }

    return (
        <div className="search container background-image">
            <h1 className="search-heading">Find Your Ideal Job</h1>
            <div className="search-job-location">
                <div className="row">
                    <div className="search-bar">
                        <input className="" type="text" value={Title} placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} />
                        <i className="bi bi-search"></i>
                    </div>

                    <div className="search-bar">
                        <input className="" type="text" value={Location} placeholder="Enter location" onChange={(e) => setLocation(e.target.value)}/>
                        <i className="bi bi-search"></i>
                    </div>
                </div>
            </div>
            <div className="search-button">
                <Link to={`/search/${Location}/${Title}`} className="btn btn-dark">
                    Find
                </Link>
            </div>
        </div>

    )
}
export default Search;