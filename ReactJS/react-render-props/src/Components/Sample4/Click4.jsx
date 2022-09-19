import React from 'react'

export const Click4 = (props) => {
  return (
    <div>
        <p onClick={props.handleCount}>You have  clicked {props.count} times</p>
    </div>
  )
}
