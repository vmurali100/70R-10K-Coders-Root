import React from 'react'

export const Click2 = ({count,handleCount}) => {
  return (
    <div>
       
         <img src={require("./Teddy.jpg")} alt=""  height={200} width={200} onClick={handleCount}/>
         <p > You have clicked the image for {count} times.</p>
    </div>
  )
}
