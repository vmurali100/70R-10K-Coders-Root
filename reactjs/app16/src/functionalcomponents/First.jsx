import { useState } from "react";
import { Childfirst } from "./Childfirst";


export function First(){
   const [welcomemsg, changewelcomemsg] = useState("helloworld");
    const [person, changeperson] = useState({ fname: "ajay", lname: "kumar" });
    const [array, changearray] = useState(["ms", "dhoni"])

    const handlechange = () => {
        changewelcomemsg("iam going to changed the value of welcomemsg")
    }

    const setperson = () => {
        changeperson({
            fname: "murali",
            lname: "krishna"
        })
    }

    const changeusers=()=>{
        changearray(["virat","kohli"])
    }
    return <div>
        <h2>hlooo........from First</h2>
        {/* <Childmessage welcomemsg={welcomemsg} handlechange={handlechange} 
        person={person} setperson={setperson} 
        array={array} changeusers={changeusers}/> */}
        
       <Childfirst  welcomemsg={welcomemsg} handlechange={handlechange} 
        person={person} setperson={setperson} 
        array={array} changeusers={changeusers}/>
    </div>
}