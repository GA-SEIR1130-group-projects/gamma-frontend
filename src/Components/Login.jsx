import Log from "./login/Header"
import React from "react";
import RegistrationForm from "./login/RegistrationForm"
import { BrowserRouter as Router, Switch} from "react-router-dom"

export default function Login() {
  return (
    <Router>
      <div className="App" >
        <Log/>

        <div className="container d-flex align-items-center flex-column" >
              <RegistrationForm/>
        </div>
      </div>
    </Router>
  );
}
