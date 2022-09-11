import React,{useState} from 'react'

export const Clickcounter = ({count,handlecount}) => {

    
  return (
    <div onClick={handlecount}>you clicked on {count} times</div>
  )
}
