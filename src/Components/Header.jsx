import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <h2> Finsta</h2>
      <div className="NavLinks">
        <Link to="/"> home </Link>
        <Link to="/login">| login |</Link>
        <Link to="/userprofile"> User Profile |</Link>
      </div>
    </div>
  );
}
