import { useState } from "react"
import { ChildMessage } from "./ChildMessage"

export function Message(){
    const [displayMsg,setDisplayMsg]=useState("Hello World")
    const [displayPerson,setDisplayPerson]=useState({fname:"Srikanth",lname:"Chokkalla"})
    const [displayStudents,setDisplayStudents]=useState(["Lavan","Mukesh"])




    const handleMessage=()=>{
        setDisplayMsg("Hello Iam Good")
    }

    const handlePerson=()=>{
        setDisplayPerson({fname:"Naveen",lname:"Chokkalla"})
    }

    const handleStudents=()=>{
        setDisplayStudents(["Srikanth","Naveen"])
    }

    return <div>
        <h2>Hello From Functional Components</h2>
        <hr />

        <ChildMessage
        displayMsg={displayMsg} handleMessage={handleMessage}
        displayPerson={displayPerson} handlePerson={handlePerson}
        displayStudents={displayStudents} handleStudents={handleStudents}
       
        />



        {/* <h3>1.String</h3>
        <button onClick={handleMessage}>Change Message</button>
        <p>Message : {displayMsg}</p>
        <hr />

        <h3>2.Object</h3>
        <button onClick={handlePerson}>Change Person</button>
        <ul>
            <li>{displayPerson.fname}</li>
            <li>{displayPerson.lname}</li>
        </ul>
        <hr />

        <h3>3.Array</h3>
        <button onClick={handleStudents}>Change Students</button>
        <ul>
            {displayStudents.map((displayStudents,i)=>{
                return <li key={i}>{displayStudents}</li>
            })}
        </ul> */}

    </div>
}