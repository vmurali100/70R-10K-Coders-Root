import React from "react";
 const PureCompFunc = ({ user, count }) => {
  console.log("****************** PureCompFunc **************");

  return (
    <>
      PureCompFunc
      <p>{user}</p>
    </>
  );
};

export default React.memo(PureCompFunc)