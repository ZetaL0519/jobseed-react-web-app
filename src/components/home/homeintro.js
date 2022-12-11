import React from "react";
import {useDispatch, useSelector} from "react-redux";
import './homeintrostyle.css';

const HomeIntro = () => {
    const {currentUser} = useSelector((state) => state.users)
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

                <div className="col col-sm-12 col-md-4 col-lg-4 col-xl-4">
                   <img src="https://media.istockphoto.com/id/1297706369/vector/sun-paint-brush-strokes-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=BvQi1mWNRrgaEJ5_AhOfs7OuXiCRb91-JJUI93LlAHg=" className="intro-icon" alt="Right jobs for you"/>
                  <div className="intro-text">
                   Pinpoint you in fit position
                  </div>
                </div>

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