import React from 'react'

export const Hover = ({ring,handleRing}) => {
  //   const [ring, setring] = useState(0);
  // const handleRing=()=>{
  //   setring(ring+1);
  // }
  return (
    <div onMouseOver={handleRing}> <p>Hey Hi!!</p> 
    <p>You have waived for {ring} times.</p></div>
  )
}
