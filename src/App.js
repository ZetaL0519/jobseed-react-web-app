import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

import Header from './common/header.js';
import Footer from './common/footer.js';
import Search from './components/home/homesearch.js';
import HomeIntro from './components/home/homeintro.js';
import EmployerHome from './components/employer/employerhome.js';
import Login from "./components/authentication/login.js";
import Register from "./components/authentication/register.js"
import RegisterEmployer from "./components/authentication/registeremployer.js";
import SearchResult from "./components/search-result/searchresult.js";
import './App.css';
import UserProfile from "./components/profile/user-profile";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import CurrentUser from "./components/profile/current-user";
import usersReducer from "./reducers/users-reducer";
import SearchJobReducer from "./reducers/jobs-reducer";

const store = configureStore({
    reducer: {
        users: usersReducer,
        searchjobs: SearchJobReducer
    }
})

function App() {
  return (
        <div className="container">
            <Provider store={store}>
                <CurrentUser>
                    <BrowserRouter>
                        <Header/>
                        <Routes>
                            <Route path="/" exact={true} element={<><Search/><HomeIntro/></>} />
                            <Route path="/employer" exact={true} element={<EmployerHome/>} />
                            <Route path="/register" exact={true} element={<Register/>} />
                            <Route path="/login" exact={true} element={<Login/>}/>
                            <Route path="/profile" exact={true} element={<UserProfile/>}/>
                            <Route path="/search" element={<SearchResult/>}/>
                        </Routes>
                        <Footer/>
                    </BrowserRouter>
                </CurrentUser>
            </Provider>
        </div>
  );
}

export default App;
