import React from 'react'
import { useContext } from 'react'
import { StudentContext } from './SudentsContext'
import { ContextConsumer } from './UserContext'
import {myUserContext} from './UserContext'

export const User = ({msg}) => {
  const userInfoContext = useContext(myUserContext);
  const allStudents= useContext(StudentContext)
  console.log(userInfoContext);
  console.log(allStudents);
  return (
    
    <div>
        
        User
        <hr/>
      <p> Message from Main-{msg}</p> 
      <p>{userInfoContext}</p>
      {/* <ContextConsumer>
        {(val)=>{
            console.log(val)
            return <p>{val}</p>
        }}
      </ContextConsumer> */}
      {/* //in the below example we are gng to see how to achieve props without contextconsumer */}

      <ul>
        {allStudents.map((std,i)=>{
          return <li key={i}>{std}</li>
        })}
      </ul>
      </div>
  )
}
