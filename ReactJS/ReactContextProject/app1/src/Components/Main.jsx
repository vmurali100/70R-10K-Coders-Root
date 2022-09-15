import React,{useState} from 'react'
import { GrandParent } from './GrandParent'
import { ContextProvider } from './UserContext'

export const Main = () => {//contextapi:to avoid props drilling.context: in manual we pass props by using this context we can use.
    const [message, setmessage] = useState("Welcome to Context API")
    const [userDetails, setuserDetails] = useState({fname:"Keerthi",lname:"Prasanna"})
  return (
    <div>

        <ContextProvider val={userDetails}>
        <p>Main Component</p>
        <hr/>
        <GrandParent msg={message}/>
        </ContextProvider>
        </div>

        
  )
}
