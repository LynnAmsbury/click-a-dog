// Require in Dependencies
import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";

// Component for the Navbar

function Nav(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-grid">
      {/* <ul> */}
        <li className="brand">
          <a href="/">Click-A-Dog Game</a>
        </li>
        <NavMessage message={props.message} />
        {/* <NavMessage score={props.score} topScore={props.topScore} /> */}
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;