/* eslint-disable no-unused-vars */
    import { useState } from "react"
import { ChildMessage } from "./ChildMessage"

export function Message(){//render not required
    const [welcomemessage,setwelcomemessage]=useState("Hello everyone")//hook used in functionlcompon.//string
    //var name welcomemsg,function setwelmsg

    const[person,setperson]=useState({fname:"Ker",lname:"pra"})//object

    const[users,setusers]=useState(["Sham","Ram","Duay"])


    const handlechange=()=>{
        setwelcomemessage("I'm going to change by setwelcome msg") //setstate not required  

    }
    const changeperson=()=>{
        setperson({fname:"Krishna",lname:"Ram"})  

    }
    const changeusers=()=>{
        setusers(["Lupo","Serah","Richard"])  

    }

    return<div>
        <h2>Hello from functional component</h2>
        <ChildMessage 
        welcomemessage={welcomemessage} 
        handlechange={handlechange}
        person={person}
        changeperson={changeperson}
        users={users}
        changeusers={changeusers}

        />
        {/* <button onClick={handlechange}>change Message</button>
        <p>Message:{welcomemessage}</p>

        <button onClick={changeperson}> Change Person</button>
        <ul>
            <li>{person.fname}</li>
            <li>{person.lname}</li>

        </ul>
        <button onClick={changeusers}> Change Users</button>
        <ul>
            {users.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul> */}
     

    </div>


}