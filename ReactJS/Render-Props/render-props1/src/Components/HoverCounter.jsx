import React,{useState} from 'react'

export const HoverCounter = ({count,handleCount}) => {
    
    
  return (
    <div>
        <h2 onMouseOver={handleCount}>You have Hovered {count} times </h2>
    </div>
  )
}