import React from "react";

export const HoverCounter = ({count,handleCount}) => {
  
  return (
    <div>
      <h2 onMouseOver={handleCount}>You Have Hovered {count} times</h2>
    </div>
  );
};
