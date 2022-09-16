import React,{useState} from 'react'
import { GrandParent } from './GrandParent'
import { ContextProvider } from './UserContext'

export const Main = () => {
    const [message, setmessage] = useState("Welcome to context api")
    const [userDetails, setuserDetails] = useState({
        fname:"Dhruva",
        lname:"Raam"
    })
  return (
    <div>
        <ContextProvider value={userDetails}>
        <p>Main Component</p>
        <hr/>
        <GrandParent msg={message}/>
        </ContextProvider>
        
        </div>
  )
}
