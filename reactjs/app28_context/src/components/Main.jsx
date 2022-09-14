import React, { useState } from 'react'
import { Grandparent } from './Grandparent'
import { ContextProvider } from './Usercontext'


export const Main = () => {
    
   const [message, setmessage] = useState("welcome to context api")
   const [userdetails, setuserdetails] = useState({
    fname:"ram",
    lname:"krishna"
   })
    return (
        <div>
         
         <ContextProvider value={userdetails}>
         <p><b> Main component</b></p>
                <hr />
                <Grandparent msg={message}/>
      
         </ContextProvider>
                


        </div>
    )
}
