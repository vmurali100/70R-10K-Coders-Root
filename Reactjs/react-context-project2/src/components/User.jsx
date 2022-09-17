import React,{useContext} from 'react'
import { myUserContext } from './UserContext'
import { studentsContext } from './StudentsContext'
export const User = ({ msg }) => {
  const userInfoContext = useContext(myUserContext)
  const allStudents =useContext(studentsContext)
  console.log(userInfoContext)
  console.log(allStudents )
  return (
    <div>
      <p>User Component</p>
      <p>Message from main comp: {msg}</p>
      <p>{userInfoContext}</p>
      {/*<ContextConsumer>
        {(val) => {
          console.log(val)
          return <p>{val}</p>
        }}
      </ContextConsumer>*/}
       <ul>
        {allStudents.map((std,i)=> <li key={i}>{std}</li>)}
       </ul>
    </div>
  )
}

