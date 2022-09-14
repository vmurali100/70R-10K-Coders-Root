import React from 'react'
import { Child } from './Child'

export const Parent = ({msg}) => {
  return (
    <div>
     <p><b>Parent component</b></p>   
     <hr />
     <Child msg={msg}/>
        </div>
  )
}
