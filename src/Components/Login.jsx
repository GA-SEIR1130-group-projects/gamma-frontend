import React from "react";
import Log from "./login/Log"
import RegistrationForm from "./login/Registration"
import { Route } from "react-router-dom"

export default function Login() {
  return (
      <div className="Login" >
        {/* <Log/> */}
        <Route path="/login" component={Log}/>
        <div className="container d-flex align-items-center flex-column" >
              {/* <RegistrationForm/> */}
        <Route path="/register" component={RegistrationForm} />
        </div>
      </div>
  );
}
