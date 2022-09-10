// Clickcounter:
import React,{useState} from 'react'

export const ClickCounter = () => {
    const [count, setcount] = useState(0)
    const handleCount =()=>{
        setcount(count+1)


    }
  return (
    <div>
        <h2 onClick={handleCount}>You Clicked {count} times</h2>
    </div>
  )
}
// HoverCounter:
import React,{useState} from 'react'

export const HoverCounter = () => {
    const [count, setcount] = useState(0)
    const handleCount =()=>{
        setcount(count+1)

    }
  return (
    <div>
        <h2 onMouseOver={handleCount}>You have Hovered {count} times </h2>
    </div>
  )
}