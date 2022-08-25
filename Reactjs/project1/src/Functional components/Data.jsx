import { useState } from "react"
import { ChildData} from "./ChildData"

export function Data(){
    const [welcomeMsg,setWelcomeMsg] = useState("Hello,I am from react js")
    const [person,setPerson]=useState({fname:"Prateep",lname:"Kumar"})
    const [users,setUsers]=useState(["Dhruva",,"Raam"])

    const handleChange=()=>{
        setWelcomeMsg ("I am going to change by setWelcomeMsg ")
    }
    const changePerson=()=>{
        setPerson({fname:"Dhruva",lname:"Raam"})
        
    }
    const changeUsers=()=>{
        setUsers(["Dharahaas","prateep","kumar"])
    }
    return <div>
        <h2>Hello from functional component</h2>
        <ChildData welcomeMsg={welcomeMsg} handleChange={handleChange}
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