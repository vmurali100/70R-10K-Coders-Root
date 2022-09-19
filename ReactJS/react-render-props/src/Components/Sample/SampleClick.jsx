import React,{useState} from 'react'

export const SampleClick = () => {
    const [click, setclick] = useState(0);
    const handleClick =() =>{
        setclick(click+1);
    }
  return (
    <div onClick={handleClick}>
        The mouse has been clicked in this div for {click} times.
     </div>
  )
}
