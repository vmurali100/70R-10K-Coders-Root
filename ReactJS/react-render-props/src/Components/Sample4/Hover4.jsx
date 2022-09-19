import React from 'react'

export const Hover4 = (props) => {
  return (
    <div onMouseMove={props.handleCount}>Hovered for {props.count} times</div>
  )
}
