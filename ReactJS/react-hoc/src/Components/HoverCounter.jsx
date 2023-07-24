import React ,{useState}from 'react'
import { HOCopm } from './HOCopm'

const HoverCounter = (props) => {
  
  return (
    <div>
        <h2 onMouseOver={props.handleCount}>Hover On Me - hovered {props.count} times</h2>
    </div>
  )
}

export default HOCopm(HoverCounter)