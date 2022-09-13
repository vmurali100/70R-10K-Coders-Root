import React from 'react'
import { HOCcomp } from './HOCcomp'

 export const ClickCounter = (props) => {
  console.log(props);
  return (
    <div>
      {/* <button type="button" onClick={()=>{props.handleCount()}}>Click Me</button> */}
      <h3 onClick={()=>{props.handleCount()}}>Click Me - clicked for {props.count} times</h3>
    </div>
  )
}

export default HOCcomp(ClickCounter);