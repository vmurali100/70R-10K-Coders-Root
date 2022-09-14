import React from 'react'
import { ContextConsumer } from './UserContext'

export const User = ({msg}) => {
  return (
    <div>
        <p>User Component</p>

        <p>Message froom Main Comp : {msg}</p>
        <ContextConsumer>
            {(val)=>{
                console.log(val)
            }}
        </ContextConsumer>
    </div>
  )
}
