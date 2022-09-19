import React,{useState} from 'react'

export const Hover3 = () => {
    const [count, setcount] = useState(0);
    const handleCount =()=>{
        setcount(count+1)
    }
  return (
    <div onMouseOver={handleCount}>
        Clicked for {count} times.
    </div>
  )
}
