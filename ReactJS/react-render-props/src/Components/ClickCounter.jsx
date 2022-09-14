import React from "react";

export const ClickCounter = ({count,handleCount}) => {

  return (
    <div>
      <h2 onClick={handleCount}>You Clicked {count} times</h2>
    </div>
  );
};
