import axios from 'axios';
import React from 'react';

// import './App.css';

function Searchcompany() {
  let [responseData, setResponseData] = React.useState('');

  const fetchData = React.useCallback(() => {
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
    const options = {
      method: 'GET',
      url: 'https://linkedin-companies-data.p.rapidapi.com/',
      params: {vanity_name: 'microsoft'},
      headers: {
        'X-RapidAPI-Key': '69dffd15c7msh256ff0a6b31f53fp109787jsn20986c64713c',
        'X-RapidAPI-Host': 'linkedin-companies-data.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data, "dddd");
      setResponseData(response.data)
    }).catch(function (error) {
      console.error(error);
    })
  }, [])

  // console.log(responseData, "responsedata")

  React.useEffect(() => {
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
      <main>
        {responseData &&
          <blockquote>
            "{responseData && responseData.company_name}"
            <small>{responseData && responseData.company_name && responseData.industry}</small>
          </blockquote>
        }
        </main>
      {/* <pre>
        <code>
          {responseData && JSON.stringify(responseData, null, 4)}
        </code>
      </pre> */}
    </div>
  );
}

export default Searchcompany;