import React,{useState} from 'react'
import { HOComp } from './HOComp'
 const ClickCounter = (props) => {
    {/*const [count, setcount] = useState(0)
    const handleCount=()=>{
        setcount(count+1)

    }*/}
    
  return (
    <div>
        <button onClick={props.handleCount}>Click Me</button>
        <h2>You clicked {props.count} times</h2>

        </div>
  )
}
export default HOComp(ClickCounter)