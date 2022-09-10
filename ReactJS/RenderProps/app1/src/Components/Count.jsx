import React,{useState} from 'react'

export const Count = (props) => {//count:it will render
    const [count, setcount] = useState(0)
    const handleCount =()=>{
        setcount(count+1)
    }
  return (
    <div>
    {props.render(count,handleCount)}    
   </div>
  )

}

