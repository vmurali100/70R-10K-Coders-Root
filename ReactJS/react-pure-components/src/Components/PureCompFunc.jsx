import React from 'react'

 const PureCompFunc = ({user,count}) => {

    console.log("$$$$$$$ PureCompFunc $$$$$$$$");
  return (
   
    <div>PureCompFunc
        <p>{user}</p>
    </div>
  )
}

export default React.memo(PureCompFunc);