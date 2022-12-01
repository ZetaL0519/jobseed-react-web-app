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
import './App.css';

function App() {
  return (
        <div className="container">
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" exact={true} element={<><Search/><HomeIntro/></>} />
                <Route path="/employer" exact={true} element={<EmployerHome/>} />
                <Route path="/register" exact={true} element={<Register/>} />
                <Route path="/login" exact={true} element={<Login/>} />
            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
  );
}

export default App;
