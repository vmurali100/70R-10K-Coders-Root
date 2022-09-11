import React,{useState} from 'react'

 export const ClickCounter = ({count,handleCount}) => {
    {/*const [count, setcount] = useState(0)
    const handleCount=()=>{
    setcount(count+1)

    }*/}
    
  return (
    <div>
        <button onClick={handleCount}>Click Me</button>
        <h2>You clicked {count} times</h2>

        </div>
  )
}