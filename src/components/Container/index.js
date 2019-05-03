// Require in dependencies
import React from "react";
import "./style.css";

function Container(props) {
  return <main className="container">{props.children}</main>;
}

// Export Container
export default Container;