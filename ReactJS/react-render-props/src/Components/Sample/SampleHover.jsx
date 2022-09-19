import React,{useState} from 'react'

export const SampleHover = () => {
    const [hover, sethover] = useState(0);
    const handleHover =() =>{
        sethover(hover+1);
    }
  return (
    <div onMouseOver={handleHover}>
        The mouse has been hovered in this div for {hover} times.
    </div>
  )
}
