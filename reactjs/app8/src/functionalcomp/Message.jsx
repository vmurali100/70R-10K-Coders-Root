import { useState } from "react"
import { Childmessage } from "./Childmessage";

export function Message() {
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
        <h2>hlooo........from message</h2>
        <Childmessage welcomemsg={welcomemsg} handlechange={handlechange} 
        person={person} setperson={setperson} 
        array={array} changeusers={changeusers}/>
        {/* <button onClick={handlechange}>changemessage</button>
        <p>message    :   {welcomemsg}</p>

        <hr />
        <button onClick={setperson}>changeperson</button>
        {person.fname}{person.lname}

        <hr />

        <button onClick={changeusers}>changeusers</button>
        {array.map((val,i) => {
            return <p key={i}>{val}</p>
        })} */}
    </div>
}