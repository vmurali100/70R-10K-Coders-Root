import React from "react";
const FuncPureComp = ({ user, count }) => {
  console.log("********* FuncPureComp ******");
  return (
    <>
      <p>FuncPureComp</p>
      <p>{user}</p>
    </>
  );
};

export default React.memo(FuncPureComp);
