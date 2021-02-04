import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <h2> gamma header</h2>
      <div className="NavLinks">
        <Link to="/"> home </Link>
        <Link to="/login">| login |</Link>
      </div>
    </div>
  );
}
