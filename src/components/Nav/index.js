// Require in Dependencies
import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";

// Component for the Navbar

function Nav(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-grid">
        <li className="navbar-item">
          <a href="/">Click-A-Dog Game</a>
        </li>
        <li className="navbar-item"><NavMessage message={props.message} />
        </li>
        <li className="navbar-item">
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;