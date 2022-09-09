import React,{useState} from 'react'
import { HOComp } from './HOComp'

//  const ClickCounter = () => {
    // const [count, setcount] = useState(0)
    // const handleCount=()=>{
    //     setcount(count+1)
    // }
    const ClickCounter = (props) => {
        console.log(props)
    

  return (
    <div>
        {/* <button onClick={handleCount}>Click Me</button>
        <h2>You clicked {count} many times </h2> */}
        <button onClick={props.handleCount}>Click Me</button>
        <h2>You clicked {props.count}  times </h2>

    </div>
  )
}
export default HOComp(ClickCounter)
