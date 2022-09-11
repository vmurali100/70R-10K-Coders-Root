import React,{useState} from 'react'

 export const HoverCounter = ({count,handleCount}) => {
    {/*const [count, setcount] = useState(0)
    const handleCount=()=>{
        setcount(count+1)
    }*/}
  return (
    <div>
        <h2 onMouseOver={handleCount}>Hover on me - hovered {count} times</h2>
    </div>
  )
}
