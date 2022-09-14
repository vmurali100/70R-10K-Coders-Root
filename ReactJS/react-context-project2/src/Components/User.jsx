import React, { useContext } from "react";
import { studentsContext } from "./studentsContext";
import { myUserContext } from "./UserContext";
export const User = ({ msg }) => {
  const userInfoContext = useContext(myUserContext);
  const allStundets = useContext(studentsContext)
  console.log(userInfoContext);
  console.log(allStundets)
  return (
    <div>
      <p>User Component</p>

      <p>Message from Main Comp : {msg}</p>
      <p>{userInfoContext}</p>
      {/* <ContextConsumer>
          {(val)=>{
              console.log(val)
             return <p>{val}</p>
          }}
      </ContextConsumer> */}
      <ul>
        {allStundets.map((std,i)=> <li key={i}>{std}</li> )}
      </ul>
    </div>
  );
};
