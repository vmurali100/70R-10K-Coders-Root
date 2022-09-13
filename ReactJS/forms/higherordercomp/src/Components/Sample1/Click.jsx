import React,{useState} from 'react'

export const Click = () => {
    const [count, setcount] = useState(0);
    const handleCount=()=>{
        setcount(count+1);
    }
  return (
    <div>
        <h2 onClick={()=>{handleCount()}}>I have been clicked for {count} times.</h2>
    </div>
  )
}
