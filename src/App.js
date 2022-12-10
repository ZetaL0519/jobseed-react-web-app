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
import SearchLocationTitle from "./components/search-result/searchlocationtitle.js";
import JobResult from "./components/jobs/jobresult.js";
import JobDetail from "./components/jobs/job-detail.js";
import Users from "./components/admin/adminboard.js"
import ProfileComponent from "./components/profile";
import EditProfile from "./components/profile/update-profile.js"
import ProtectedRoute from "./components/authentication/protected-route.js"
import {CreateJob} from "./components/jobs/job-create.js"

import './App.css';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import CurrentUser from "./components/profile/current-user";
import usersReducer from "./reducers/users-reducer";
import SearchJobReducer from "./reducers/search-jobs-reducer";
import JobsReducer from "./reducers/jobs-reducer";
import CollectsReducer from "./reducers/collect-reducer";

const store = configureStore({
    reducer: {
        users: usersReducer,
        searchjobs: SearchJobReducer,
        jobs: JobsReducer,
        collects: CollectsReducer,
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
                            <Route path={'/profile'} element={<ProtectedRoute><ProfileComponent/></ProtectedRoute>}/>
                            <Route path={'/profile/edit'}
                                   element={<EditProfile/>}/>
                            <Route path="/search/:searchTerm" element={<SearchResult/>}/>
                            <Route path="/search/:location/:title" element=<SearchLocationTitle/>/>

                            <Route path="/jobs" element={<JobResult/>}/>
                            <Route path="/admin" element={<ProtectedRoute><Users/>></ProtectedRoute>}/>
                            <Route path="/jobs/:jid" element={<JobDetail/>}/>
                            <Route path="/profile/createjob" element={<CreateJob/>}/>
                            <Route path="/admin" element={<Users/>}/>
                        </Routes>
                        <Footer/>
               </BrowserRouter>
               </CurrentUser>
            </Provider>
        </div>
  );
}

export default App;
