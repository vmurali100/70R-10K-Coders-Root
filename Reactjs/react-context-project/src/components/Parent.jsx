import React from 'react'
import { Child } from './Child'

export const Parent = ({msg}) => {
  return (
    <div>
        <p>Parent Component</p>
        <hr/>
        <Child msg={msg}/>
    </div>
  )
}
