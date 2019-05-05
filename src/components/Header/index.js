// Require in dependencies
import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      {/* <h1>Click a Dog Game!</h1> */}
      <h2>Click on the images to earn points, but don't click on any more than once or you'll lose.
        Click on all twelve without clicking any twice and you win!</h2>
    </header>
  );
}

// Export Header
export default Header;