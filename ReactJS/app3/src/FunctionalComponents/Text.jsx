import { useState } from "react"

import { ChildText } from "./ChildText"

export function Text(){
   const [welcomemsg,setWelcomemsg] =useState("Hello from Content")
   const [list,setList]=useState({fname:"Brown",lname:"Roy", email:"a@gmail.com",state:"Andhra"})
   const [details,setDetails]=useState(["Deepa","Jaswal","rajini"])
   const handleChange=()=>{
    setWelcomemsg("I am going to change by setWelcomemsg")
   }
   const changeList=()=>{
    setList({fname:"David",lname:"Osses", email:"dav@gmail.com", state:"New South Wale"})
   }
   const changeDetails=()=>{
    setDetails(["Mouni","Rushi","Rama"])
   }
    return <div>
        <h2>Hello From Functional Component</h2>
        <ChildText welcomemsg={welcomemsg} handleChange={handleChange}/>
        <button onClick={handleChange}>Change Content</button>
        <p>Content : {welcomemsg}</p>

        <button onClick={changeList}>Change Person</button>
        <ul>
            <li>{list.fname}</li>
            <li>{list.lname}</li>
            <li>{list.email}</li>
            <li>{list.state}</li>
        </ul>

        <button onClick={changeDetails}>Change Details</button>
        <ul>
            {details.map((detail,i)=>{
                return <li key={i}>{detail}</li>
            })}
        </ul>
    </div>
}