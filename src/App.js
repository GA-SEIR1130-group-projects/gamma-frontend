// import logo from "./logo.svg";
import { Route, withRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import RegistrationForm from "./Components/login/Registration"
import UserProfile from "./Components/UserProfile";
import EditProfile from "./Components/UserProfile-Components/EditProfile";
import ChangePassword from "./Components/UserProfile-Components/ChangePassword";
import DeleteProfile from "./Components/UserProfile-Components/DeleteProfile";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="Home">
        <Route path="/" exact component={Home} />
        <Route exact path="/userprofile" component={withRouter(UserProfile)}/>
        <Route exact path="/editProfile" component={EditProfile}/>
        <Route exact path="/deleteProfile" component={DeleteProfile}/>
        <Route exact path="/changePassword" component={ChangePassword}/>
        <Route path="/login" component={Login} /> 
        <Route exact path="/register" component={RegistrationForm}/>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
