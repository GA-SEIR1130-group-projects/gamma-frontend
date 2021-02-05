// import logo from "./logo.svg";
import { Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <div className="Home">
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/api/users/:id" component={UserProfile} />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
