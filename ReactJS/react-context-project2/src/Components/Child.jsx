import React from "react";
import { User } from "./User";

export const Child = ({msg}) => {
  return (
    <div>
      <p>Child Component</p>
      <hr />
      <User msg={msg}/>
    </div>
  );
};
