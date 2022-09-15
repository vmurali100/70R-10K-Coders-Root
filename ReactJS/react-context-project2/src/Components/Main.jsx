/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { GrandParent } from './GrandParent'
import {ContextProvider} from './UserContext'

export const Main = () => {
    const [message, setmessage] = useState("Welcome To React Context API Project 2")
    const [newmessage, setNewmessage] = useState("Welcome To React Hooks Context ")

    const [students, setstudents] = useState({
        fname:"Srikanth",
        lname:"Chokkalla"
    }) 
  return (
    <div>
        <h2>React-Contxt</h2>
        <ContextProvider value={newmessage}>
        <p>Main Component</p>
        <hr />
        <GrandParent msg={message}/>
        </ContextProvider>
    </div>
  )
}
