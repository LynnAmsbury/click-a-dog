// Require in dependencies
import React from "react";
import "./style.css";

function ClickItem(props) {
  return (
    <div
      role="img"
      aria-label="click item"
      key = {props.id}
      onClick={() => props.handleClick(props.id)}
      
      className="click-item"
      >
      <img src={ props.image } alt="character" style={{ width: 200 }} />
    </div>
  );
}

// Export ClickItem
export default ClickItem;