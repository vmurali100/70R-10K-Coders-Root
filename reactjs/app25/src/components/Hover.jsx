import React,{useState} from 'react'
import { HOCcomp } from './HOCcomp'

const Hover = (props) => {
   
  return (
    <div>
        {/* <h1 onMouseOver={()=>{setcount(count+1 )}}>Hover on me - hovered {count} times</h1> */}
        <h1 onMouseOver={props.handlecount}>Hover on me - hovered {props.count} times</h1>
        </div>
  )
}

export default HOCcomp(Hover)