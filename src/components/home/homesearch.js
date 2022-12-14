import {React, useEffect, useState, useCallback} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {findJobByLocationTitleTermThunk} from "../../services/search-jobs-thunks";
import "./homesearchstyle.css";
import SearchcompanyBar from "../search-result/searchcompany.js"
import axios from 'axios';

const Search = () => {

    const [Location, setLocation] = useState('')
    const [Title, setTitle] = useState('')
    const dispatch = useDispatch()
    const handleSearchBtn = () => {
        dispatch(findJobByLocationTitleTermThunk({
            Location
        }, {Title}))
    }



    let [responseData, setResponseData] = useState('');
    // const [Location, setLocation] = useState('')
    const [Comp, setComp] = useState('')
  
    const fetchData = useCallback(() => {
  
      const options = {
        method: 'GET',
        url: 'https://linkedin-companies-data.p.rapidapi.com/',
        params: {vanity_name: Comp},
        headers: {
          'X-RapidAPI-Key': '69dffd15c7msh256ff0a6b31f53fp109787jsn20986c64713c',
          'X-RapidAPI-Host': 'linkedin-companies-data.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        
        setResponseData(response.data)
        console.log(response.data)
      }).catch(function (error) {
        console.error(error);
      })
    }, [Comp])
  
    console.log(responseData, "dada")
  
    useEffect(()=>{
      setComp(Comp)
    },[Comp])
  
    useEffect(() => {
      fetchData()
    }, [fetchData])




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
            {/* <SearchcompanyBar /> */}

             <div className="mt-3 search-job-location">
                <div className="row">
                    <div className="search-bar">
                        <input className="" type="text" value={Comp} placeholder="Temp company search" onChange={(e) => setComp(e.target.value)} />
                        <i className="bi bi-search"></i>
                    </div>
                </div>
            </div> 
            <div className="search-button">
            <Link to={`/company/search/${Comp.toLocaleLowerCase()}`} state={responseData} className="btn btn-dark">
                    Find Company
                </Link> 
            </div>
            </div>
            
        // </div>

    )
}
export default Search;