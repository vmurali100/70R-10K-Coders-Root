import { useState } from "react";
import { Childthird } from "./Childthird";

export function Third (){
    const [txtmsg, changetxt] = useState("hi from .. coders");
    const [virtual, changevirtual] = useState({ fname: "shiva", lname: "shankar" });
    const [sigma, changesigma] = useState(["brad", "haddin"])

    const handlechange = () => {
        changetxt("iam going to changed the value of welcomemsg")
    }

    const setperson = () => {
        changevirtual({
            fname: "pranav",
            lname: "kumar"
        })
    }

    const changeusers=()=>{
        changesigma(["vihari","hanuma"])
    }
    return <div>
        <h2>hlooo........from First</h2>
        
       <Childthird txtmsg={txtmsg} handlechange={handlechange} 
        virtual={virtual} setperson={setperson} 
        sigma={sigma} changeusers={changeusers}/>
    </div>
}