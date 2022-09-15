import React from "react";
import ReactDOM from "react-dom";

export const PortalDemo = () => {
  return ReactDOM.createPortal(
    <h2>Hello From Portal Demo</h2>,
    document.getElementById("srikanth")
  );
};
