import React from 'react'

 const Hover2 = (props) => {
  return (
    <div>
        <p onMouseOver={props.handleCount}>You have hovered {props.count} times.</p>
    </div>
  )
}

export default Hover2;