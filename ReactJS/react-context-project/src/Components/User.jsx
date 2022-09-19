import React from 'react'
import { ContextConsumer } from './UserContext'

export const User = ({msg}) => {
  return (
    
    <div>
        
        User
      <p> Message from Main-{msg}</p> 
      <ContextConsumer >
        {(val)=>{
            console.log(val)
        }}
      </ContextConsumer>
      </div>
  )
}
