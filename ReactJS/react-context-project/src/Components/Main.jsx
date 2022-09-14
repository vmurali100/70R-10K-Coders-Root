import React, { useState } from "react";
import { GrandParent } from "./GrandParent";
import { ContextProvider } from "./UserContext";

export const Main = () => {
  const [message, setmessage] = useState("Welcome to Context API");
  const [userDetails, setuserDetails] = useState({
    fname: "Ram",
    lname: "Krishna",
  });
  return (
    <div>
      <p>Main Component</p>
      <hr />
      <GrandParent msg={message} />
    </div>
  );
};
