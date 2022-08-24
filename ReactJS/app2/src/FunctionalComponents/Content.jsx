import { useState } from "react"
import { ChildContent } from "./ChildContent"

export function Content(){
   const [welcomemsg,setWelcomemsg] =useState("Hello from Content")
   const [setData]=useState({fname:"Brown",lname:"Roy"})
   const [users,setUsers]=useState(["Deepa","Jaswal","rajini"])
   const handleChange=()=>{
    setWelcomemsg("I am going to change by setWelcomemsg")
   }
   const changeData=()=>{
    setData({fname:"David",lname:"Osses"})
   }
   const changeUsers=()=>{
    setUsers(["Mouni","Rushi","Rama"])
   }
    return <div>
        <h2>Hello From Functional Component</h2>
        <ChildContent welcomemsg={welcomemsg} handleChange={handleChange}/>
        <button onClick={handleChange}>Change Content</button>
        <p>Content : {welcomemsg}</p>

        <button onClick={changeData}>Change Person</button>
        <ul>
            <li>{person.fname}</li>
            <li>{person.lname}</li>
        </ul>

        <button onClick={changeUsers}>Change Users</button>
        <ul>
            {users.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul>
    </div>
}