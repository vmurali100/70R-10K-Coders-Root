import { useState } from "react"
import { ChildMessage } from "./childmessage"

export function Message(){
    const [welcomeMsg,setWelcomeMsg] =useState("Hello Vishnu")
    const[person,setPerson] = useState({fname:"vishnu",lname:"vardhan"})
    const[users,setUsers] = useState(["nikhil","akhil"])

    const handleChange=()=>{
        setWelcomeMsg("iam going to change my setWelcomeMsg")
    }

    const changePerson=()=>{
        setPerson({fname:"hari",lname:"krishna"})
    }

    const changeUsers =()=>{
        setUsers(["KOMAL","HARI"])
    }

    return <div>
        <h2>Hello from functional component</h2>
        <ChildMessage welcomeMsg={welcomeMsg} 
        handleChange={handleChange} 
        person={person} 
        changePerson={changePerson} 
        users={users}
        changeUsers={changeUsers}/>
        {/* <button onClick={handleChange}>Change Message</button>
        <p>message:{welcomeMsg}</p>

        <button onClick={changePerson}>Change Person</button>
        <ul>
            <li>{person.fname}</li>
            <li>{person.lname}</li>
        </ul>

        <button onClick={changeUsers}>Change Users</button>
        <ul>
            {users.map((user,i)=>{
                return <li key={i}>{user}</li>})}</ul> */}
    </div>
}