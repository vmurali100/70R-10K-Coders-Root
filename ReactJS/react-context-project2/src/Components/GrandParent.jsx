/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { Parent } from './Parent'
import {InfoContextProvider} from './InfoContext'

export const GrandParent = ({msg}) => {
  const [info, setinfo] = useState(["Sathish","Lavan","Srikanth","Anil","Mukesh","Naveen"])
  return (
    <div>
        
    <InfoContextProvider value={info}>
    <p>GrandParent Component</p>
        <hr />
        <Parent msg={msg}/>
    </InfoContextProvider>

    </div>
  )
}
