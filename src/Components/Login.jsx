import React from "react";
import Log from "./login/Header"
import RegistrationForm from "./login/RegistrationForm"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

export default function Login() {
  return (
    <Router>
      <div className="App" >
        <p>login holder</p>
        <Log/>

        <div className="container d-flex align-items-center flex-column" >
          <Switch>
            {/* <Route exact path="/" > */}
              <RegistrationForm/>
            {/* </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
