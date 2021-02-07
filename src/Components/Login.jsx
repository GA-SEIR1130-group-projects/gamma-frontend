import React from "react";
import Log from "./login/Header"
import RegistrationForm from "./login/Registration"
import { BrowserRouter as Router} from "react-router-dom"

export default function Login() {
  return (
    <Router>
      <div className="Login" >
        <Log/>

        <div className="container d-flex align-items-center flex-column" >
              <RegistrationForm/>
        </div>
      </div>
    </Router>
  );
}
