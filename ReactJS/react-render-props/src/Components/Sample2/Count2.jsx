import React, { useState } from 'react'

export const Count2 = (props) => {
  const [count, setcount] = useState(0);
  const handleCount = () => {
    setcount(count + 1);
  }
  return (
    <div>{props.render(count, handleCount)}</div>
  )
};
