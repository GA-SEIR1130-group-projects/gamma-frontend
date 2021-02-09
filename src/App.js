// import logo from "./logo.svg";
import { Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import UserProfile from "./Components/UserProfile";
import PicturePost from "./Components/PicturePost"
import RegistrationForm from "./Components/Login"


function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <div className="Home">
        <Route path="/" exact component={Home} />
        <Route path="/userprofile" exact component={UserProfile}/>
      </div>
      
      <Route path="/login" component={Login} />
      <Route path="/post" exact component={PicturePost}/>        
      <Route path="/register" component={RegistrationForm} />


      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
