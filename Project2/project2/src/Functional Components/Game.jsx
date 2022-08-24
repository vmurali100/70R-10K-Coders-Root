import { useState } from "react"
import { Players } from "./players"


export function Game(){
    const [welcomeMsg,setWelcomeMsg] =useState("Hello its about Cricket")
    const[format,setFormats] = useState({test:"100overs",oneday:"50overs",t20:"20overs"})
    const[players,setPlayers] = useState(["sachin","kohli","dhoni"])

    const handleChange=()=>{
        setWelcomeMsg("iam going to change something")
    }

    const changeFormats=()=>{
        setFormats({test:"80overs",oneday:"40overs",t20:"10overs"})
    }

    const changePlayers =()=>{
        setPlayers(["ROHIT","KL RAHUL"])
    }

    return <div>
        <h2>Hello from functional component</h2>
        <Players welcomeMsg={welcomeMsg} 
        handleChange={handleChange} 
        format={format} 
        changeFormats={changeFormats} 
        players={players}
        changePlayers={changePlayers}/>
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