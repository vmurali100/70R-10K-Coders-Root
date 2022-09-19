import React,{useState} from 'react'
import { GrandParent } from './GrandParent';
import { ContextProvider } from './UserContext';



export const Main = () => {
    const [message, setmessage] = useState("Welcome to Context API-2");
    const [newmessage, setnewmessage] = useState("Welcome to  react context-hooks-2")
    const [person, setperson] = useState({
      fname:"meena",
      lname:"seelam",
    })
   
  return (
    <div>      

     
       <ContextProvider value={newmessage}>
       <p>Main Component</p>
       <hr/>
       <GrandParent  msg={message}/>
       </ContextProvider>
    </div>
  )
}
