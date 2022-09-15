import React from 'react'
import { ContextConsumer } from './UserContext'

export const User = ({msg}) => {
  return (
    <div>
        <p>User Component</p>
        <p>Message From Main Component : {msg}</p>
        <ContextConsumer>
            {(value)=>{
                console.log(value)
                
            }}
        </ContextConsumer>
    </div>
  )
}
