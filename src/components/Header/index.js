// Require in dependencies
import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      {/* <h1>Click a Dog Game!</h1> */}
      <h2>Click on each image to earn a point. Don't click on any images more than once or you'll lose.
        Click on all twelve images without clicking any twice and you win!</h2>
    </header>
  );
}

// Export Header
export default Header;