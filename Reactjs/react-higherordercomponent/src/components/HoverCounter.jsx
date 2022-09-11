import React,{useState} from 'react'
import { HOComp } from './HOComp'
 const HoverCounter = (props) => {
    {/*const [count, setcount] = useState(0)
    const handleCount=()=>{
        setcount(count+1)
    }*/}
  return (
    <div>
        <h2 onMouseOver={props.handleCount}>Hover on me - hovered {props.count} times</h2>
    </div>
  )
}
export default HOComp(HoverCounter)