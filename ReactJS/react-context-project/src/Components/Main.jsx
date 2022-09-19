import React,{useState} from 'react'
import { GrandParent } from './GrandParent';
import { ContextProvider } from './UserContext';



export const Main = () => {
    const [message, setmessage] = useState("Welcome from main");
    const [person, setperson] = useState({
      fname:"meena",
      lname:"seelam",
    })
   
  return (
    <div>      
     {/* <ContextProvider value={person}> */}
       {/* <ContextProvider value={person}> */}
       <p>Main Component</p>
       <hr/>
       <GrandParent  msg={message}/>
       {/* </ContextProvider> */}
    </div>
  )
}
