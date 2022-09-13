import React from "react";

export function ClickCounter({ count, handleCount }) {

  return (
    <div>
      <h2 onClick={handleCount}>You Clicked {count} times</h2>
    </div>
  );
}
