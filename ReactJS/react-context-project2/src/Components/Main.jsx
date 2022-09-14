import React, { useState } from "react";
import { GrandParent } from "./GrandParent";
import { ContextProvider } from "./UserContext";

export const Main = () => {
  const [message, setmessage] = useState("Welcome to Context API - Project 2");
  const [newmessage, setNewmessage] = useState("Welcome to React-Hooks Context");
  const [userDetails, setuserDetails] = useState({
    fname: "Ram",
    lname: "Krishna",
  });
  return (
    <div>
      <ContextProvider value={newmessage}>
        <p>Main Component</p>
        <hr />
        <GrandParent msg={message} />
      </ContextProvider>
    </div>
  );
};
