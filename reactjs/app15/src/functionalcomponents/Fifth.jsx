import { useState } from "react";
import { Childfifth } from "./Childfifth";

export function Fifth(){


    const [txtmsg, changetxt] = useState("hi from .. 10kcoders");
    const [virtual, changevirtual] = useState({ fname: "laxmi", lname: "balaji" });
    const [sigma, changesigma] = useState(["mike", "hussey"])

    const handlechange = () => {
        changetxt("iam going to changed the value of welcomemsg")
    }

    const setperson = () => {
        changevirtual({
            fname: "praveen",
            lname: "kumar"
        })
    }

    const changeusers=()=>{
        changesigma(["sourav","ganguly"])
    }
    return <div>

        <h1>
            hlo..........from Fifth
        </h1>
        <Childfifth
        txtmsg={txtmsg} handlechange={handlechange} 
        virtual={virtual} setperson={setperson} 
        sigma={sigma} changeusers={changeusers}/>
    </div>
}