import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import './homeintrostyle.css';
import {getWeather} from "../../services/weatherAPI.js"

const HomeIntro = () => {

    const {currentUser} = useSelector((state) => state.users)
    const [weather, setWeather] = useState("");
    const [city, setCity] = useState("Boston");
    const [icon, setIcon] = useState(null);
    const getweather = () => {
        getWeather(city).then(w => {
            setWeather(w)
            const i = "http://openweathermap.org/img/w/" + w.data.weather[0].icon + ".png"
            setIcon(i)
        })
    }

    useEffect(() => {
        getweather()
        
    },[city])
    console.log(icon)
    return (
        <div className="container">
            <div className="section-title">
                <h3 className="intro-subheading">{currentUser && <span>Hi {currentUser.firstName} ! </span>}Launch your career </h3>
                <h2 className="intro-heading">@JobSeed</h2>
            </div>


            <div className="row">
                <div className="col col-sm-12 col-md-4 col-lg-4 col-xl-4">
                   <img src="https://media.istockphoto.com/id/1297706369/vector/sun-paint-brush-strokes-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=BvQi1mWNRrgaEJ5_AhOfs7OuXiCRb91-JJUI93LlAHg=" className="intro-icon" alt="Right jobs for you"/>
                   <div className="intro-text">
                    Find right job for you
                   </div>
                </div>

                {weather && <div className="col col-sm-12 col-md-4 col-lg-4 col-xl-4">
                   {/* <img src="https://media.istockphoto.com/id/1297706369/vector/sun-paint-brush-strokes-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=BvQi1mWNRrgaEJ5_AhOfs7OuXiCRb91-JJUI93LlAHg=" className="intro-icon" alt="Right jobs for you"/>
                  <div className="intro-text">
                   Pinpoint you in fit position
                  </div> */}
                 <div className="d-flex flex-column text-center mt-5 mb-4">
                    <input className="weather-input" type="text" value={city} onChange={(c) => setCity(c.target.value)}/>
                    <h2 className="display-4 mb-0 font-weight-bold temp"> {weather.data.main.temp} </h2>
                    {icon && <div id="icon"><img className="weather-icon" id="wicon" src={icon} alt="Weather icon" /></div>}
                    <span className="small weather">{weather.data.weather[0].main}</span>
                    </div>
                    
                </div>}

                <div className="col col-sm-12 col-md-4 col-lg-4 col-xl-4">
                   <img src="https://media.istockphoto.com/id/1297706369/vector/sun-paint-brush-strokes-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=BvQi1mWNRrgaEJ5_AhOfs7OuXiCRb91-JJUI93LlAHg=" className="intro-icon" alt="Right jobs for you"/>
                 <div className="intro-text">
                  Land you with dream company
                 </div>
                </div>


            </div>
        </div>

    )
}
export default HomeIntro;