import React from 'react'

export const Click = ({ring,handleRing}) => {
  // const [ring, setring] = useState(0);
  // const handleRing=()=>{
  //   setring(ring+1);
  // }
  return (
    <div>
      <p>Hi please click the bell <button onClick={handleRing}>Ring Ring</button> </p>
      <p>You have cliked bell for {ring} times.</p>

    </div>
  )
}
