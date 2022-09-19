import React from 'react'

export const Click5 = ({count,handleCount}) => {
  return (
    <div onClick={handleCount}>{count}clicked</div>
  )
}
