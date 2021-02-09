import React from "react";
import Log from "./login/Log"
import RegistrationForm from "./login/Registration"
import { Route } from "react-router-dom"


export default function Login() {
  return (
    <div className="Login" >
      <Route exact path="/login" component={Log}/>
      <div className="container d-flex align-items-center flex-column" >
        <Route exact path="/register" component={RegistrationForm}/>
      </div>
    </div>
  );
}
