import React,{useState} from 'react'

export const Hover = () => {
    const [count, setcount] = useState(0);
    const handleCount=()=>{
        setcount(count+1);
    }
  return (
    <div>
        <h2 onMouseOver={()=>{handleCount()}}>Hovered over for {count} times</h2>
    </div>
  )
}
