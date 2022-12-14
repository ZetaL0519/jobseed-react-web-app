import {React, useEffect, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

// import './App.css';

function SearchcompanyBar() {
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
    <div className="App">
      <header className="App-header">
        <h1>
          Fetching Data with React Hooks
        </h1>
        <button type='button' onClick={fetchData}>Click for Data</button>
      </header>
      <div className="search container background-image">
            <h1 className="search-heading">Find Your Ideal Job</h1>
            <div className="search-job-location">
                <div className="row">
                    <div className="search-bar">
                        <input className="" type="text" value={Comp} placeholder="Enter Comp" onChange={(e) => setComp(e.target.value)} />
                        <i className="bi bi-search"></i>
                    </div>
                </div>
           
            <div className="search-button">
                <Link to={`/company/search/${Comp.toLocaleLowerCase()}`} state={responseData} className="btn btn-dark">
                    Find Company
                </Link> 
            </div>
        </div>
      <main>
        {responseData &&
          <blockquote>
            "{responseData && responseData.company_name}"
            <small>{responseData && responseData.company_name && responseData.industry}</small>
          </blockquote>
        }
        </main>   
      <pre>
        <code>
          {responseData && JSON.stringify(responseData, null, 4)}
        </code>
      </pre>
    </div>
    </div>
  );
}

export default SearchcompanyBar;


  //   axios({
  //     "method": "GET",
  //     "url": "https://quotes15.p.rapidapi.com/quotes/random/",
  //     "headers": {
  //       "content-type": "application/octet-stream",
  //       "x-rapidapi-host": "quotes15.p.rapidapi.com",
  //       "x-rapidapi-key": process.env.REACT_APP_API_KEY
  //     }, "params": {
  //       "language_code": "en"
  //     }
  //   })
  //   .then((response) => {
  //     setResponseData(response.data)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })