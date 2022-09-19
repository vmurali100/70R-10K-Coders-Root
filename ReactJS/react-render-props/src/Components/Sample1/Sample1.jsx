import React from 'react'

export const Sample1 = (props) => {
  return (
    <div>
        <p>{props.message}</p>
        <p>{props.meena(true)}</p>
        <p>{props.meena(false)}</p>
    </div>
  )
}
