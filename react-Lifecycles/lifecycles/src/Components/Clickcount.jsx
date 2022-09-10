import React from 'react'
import { HOCcomp } from './HOCcomp'
 const Clickcount = (props) => {
    

  return (
    <div>
        <button onClick={props.handlecount}>click me</button>
    <h2>you clicked {props.count} times</h2>
    </div>
  )

  }
  export default HOCcomp(Clickcount)