import React from 'react'
import { HocComp } from './HocComp'

const ClickCounter = (props) => {

  return (
    <div>
        <button onClick={props.handleCount}>Click Me</button>
        <h2>You Clicked {props.count}  times</h2>
    </div>
  )
}

export default HocComp(ClickCounter)

