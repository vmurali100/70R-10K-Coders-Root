import React, { useContext } from "react";
import { ContextConsumer, studentContext } from "./UserContext";
import { InfoContext } from "./InfoContext";

export const User = ({ msg }) => {
  // With Out Using Context Provider and Consumer to display the message.
  const studentInfoContext = useContext(studentContext);
  console.log(studentInfoContext);

  const allInfo = useContext(InfoContext);
  console.log(allInfo);

  return (
    <div>
      <p>User Component</p>
      <p>Message From Main Component : {msg}</p>
      <ContextConsumer>
        {(value) => {
          console.log(value);
          return (
            <p>
              Message From Main Component Using Context Provider and Consumer :
              {value}
            </p>
          );
        }}
      </ContextConsumer>
      <p>
        Message From Main Component Using React UseContext Hook :{" "}
        {studentInfoContext}
      </p>
      Message From Grand Parent Component Using React UseContext Hook :{" "}
      <ul>
        {allInfo.map((info, i) => (
          <li key={i}>{info}</li>
        ))}
      </ul>
    </div>
  );
};
