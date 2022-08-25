import { useState } from "react"
import { ChildMessage } from "./ChildMessage"

export function Message(){
    const [welcomeMsg,setWelcomeMsg] = useState("Hello world")
    const [person,setPerson]=useState({fname:"Dhruva",lname:"Raam"})
    const [users,setUsers]=useState(["Dharahaas",,"kumar"])

    const handleChange=()=>{
        setWelcomeMsg ("I am going to change by setWelcomeMsg ")
    }
    const changePerson=()=>{
        setPerson({fname:"prateep",lname:"kumar"})
        
    }
    const changeUsers=()=>{
        setUsers(["Dhruva","Raam","prateep","kumar"])
    }
    return <div>
        <h2>Hello from functional component</h2>
        <ChildMessage welcomeMsg={welcomeMsg} handleChange={handleChange}
                    person={person}
                    changePerson={changePerson}
                    users={users}
                    changeUsers={changeUsers}/>
        {/*<button onClick={handleChange}>change message</button>
    <p>Message : {welcomeMsg}</p>
    <button onClick={changePerson}>change person</button>
    <ul>
        <li>{person.fname}</li>
        <li>{person.lname}</li>
    </ul>
    <button onClick={changeUsers}>change users</button>
   <ul>
    {users.map((user,i)=>{
return <li key={i}>{user}</li>
    })
}

    
</ul>*/}
        </div>
}