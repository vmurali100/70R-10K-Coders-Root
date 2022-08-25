import { useState } from "react";
import { Childsecond } from "./Childsecond";

export function Second(){
    const [welcomemsg, changewelcomemsg] = useState("helloworld");
    const [person, changeperson] = useState({ fname: "vijay", lname: "kumar" });
    const [array, changearray] = useState(["sachin", "tendulkar"])

    const handlechange = () => {
        changewelcomemsg("iam going to changed the value of welcomemsg")
    }

    const setperson = () => {
        changeperson({
            fname: "karthik",
            lname: "krishna"
        })
    }

    const changeusers=()=>{
        changearray(["vvs","laxman"])
    }
    return <div>
        <h2>hlooo........from First</h2>
        
       <Childsecond  welcomemsg={welcomemsg} handlechange={handlechange} 
        person={person} setperson={setperson} 
        array={array} changeusers={changeusers}/>
    </div>
}