import React,{useState} from 'react'
import { User } from './User'
import { ContextConsumer } from './UserContext'
import {Child} from './Child'
import { StudentContextProvider } from './SudentsContext'

export const Parent = ({msg}) => {
  const [studentsInfo, setstudentsInfo] = useState(["Ram","Sam","Krishna","Prajwalit"])
  return (
    <div>
      <StudentContextProvider value={studentsInfo}>
      Parent Component
      <hr/>
        <Child msg={msg}/>
        </StudentContextProvider>
    </div>
  )
}
