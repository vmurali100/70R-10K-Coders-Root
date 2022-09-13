import React from 'react'
import { HocComp } from './HocComp'

const HoverCounter = (props) => {
  
  return (
    <div>
        <h2 onMouseOver={props.handleCount}>Hover On Me - hovered {props.count} times</h2>
    </div>
  )
}

export default HocComp(HoverCounter)