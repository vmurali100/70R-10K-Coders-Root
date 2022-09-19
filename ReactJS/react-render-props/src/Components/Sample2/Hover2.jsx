import React from 'react'

export const Hover2 = ({count,handleCount}) => {
  return (
    <div>
        <img onMouseOver={handleCount} src="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg"  alt="" height={200} width={200} />
        <p>You have hovered {count} times.</p> 
    </div>
  )
}
