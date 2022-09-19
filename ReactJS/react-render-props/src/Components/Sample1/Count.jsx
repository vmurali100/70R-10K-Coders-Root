import React, { useState } from 'react'

export const Count = (props) => {
  const [ring, setring] = useState(0);
  const handleRing = () => {
    setring(ring + 1);
  }
  return (
    <div>{props.render(ring, handleRing)}</div>
  )
}
