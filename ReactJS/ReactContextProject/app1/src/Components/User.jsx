import React from 'react'
import { ContextConsumer } from './UserContext'

export const User = ({msg}) => {
  return (
    <div>
        <p>User Component</p>
        <p>Message from main Comp:{msg}</p>
        <ContextConsumer>//callback functn will bring the value
            {(value)=>{
            console.log(value)
            }}
        </ContextConsumer>
        </div>
  )
}
