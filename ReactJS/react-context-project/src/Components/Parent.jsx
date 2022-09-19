import React from 'react'
import { User } from './User'
import { ContextConsumer } from './UserContext'

export const Parent = ({msg}) => {
  return (
    <div>Parent Component
      <hr/>
        <User msg={msg}/>
        <ContextConsumer>
            {(val)=>{
                console.log(val)
            }}
        </ContextConsumer>
       
    </div>
  )
}
