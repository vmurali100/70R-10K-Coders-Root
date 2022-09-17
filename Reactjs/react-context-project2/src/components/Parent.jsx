import React,{useState} from 'react'
import { Child } from './Child'
import { StudentsContextProvider } from './StudentsContext'
export const Parent = ({msg}) => {
  const [students, setstudents] = useState(["Dhruva","Raam","dharahaas","Deepak"])
  return (
    <div>
      <StudentsContextProvider value={students}>
      <p>Parent Component</p>
        <hr/>
        <Child msg={msg}/>
      </StudentsContextProvider>
      
    </div>
  )
}
