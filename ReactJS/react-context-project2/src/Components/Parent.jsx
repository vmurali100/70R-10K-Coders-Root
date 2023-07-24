import React,{useState} from 'react'
import { Child } from './Child'
import { StudentsContextProvider } from './studentsContext'

export const Parent = ({msg}) => {
  const [students, setstudents] = useState(["Ram","Ravi","Sam","Sunder"])
  return (
    <div>
      <StudentsContextProvider value={students}>
      <p>Parent Component</p>
        <hr />
        <Child msg={msg}/>
      </StudentsContextProvider>
    </div>
  )
}
