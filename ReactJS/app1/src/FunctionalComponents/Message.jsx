import { useState } from "react"
import { ChildMessage } from "./ChildMessage"

export function Message(){
   const [welcomemsg,setWelcomemsg] =useState("Hello world")
   const [person,setPerson]=useState({fname:"John",lname:"Roy"})
   const [users,setUsers]=useState(["roy","ram","raj"])
   const handleChange=()=>{
    setWelcomemsg("I am going to change by setWelcomemsg")
   }
   const changePerson=()=>{
    setPerson({fname:"David",lname:"Osses"})
   }
   const changeUsers=()=>{
    setUsers(["Manasa","Roja","Ram"])
   }
    return <div>
        <h2>Hello From Functional Component</h2>
        <ChildMessage welcomemsg={welcomemsg} handleChange={handleChange}/>
        {/* <button onClick={handleChange}>Change Message</button>
        <p>Message : {welcomemsg}</p>

        <button onClick={changePerson}>Change Person</button>
        <ul>
            <li>{person.fname}</li>
            <li>{person.lname}</li>
        </ul>

        <button onClick={changeUsers}>Change Users</button>
        <ul>
            {users.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul> */}
    </div>
}