import React from 'react'

export const Hover5 = ({count,handleCount}) => {
  return (
    <div onMouseOver={handleCount}>Hovered{count} times</div>
  )
}
