import React from 'react'
import { User } from './User'

export const Child = ({msg}) => {
  return (
    <div>
      <p><b>Child component</b></p>  
      <hr />
      <User msg={msg}/>
        </div>
  )
}
