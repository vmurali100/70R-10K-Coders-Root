import { useState } from "react";
import { ChildFuncFour } from "./ChildFunctionFour";



export function ParentFuncFour(){
    const [string,setString] = useState("KCR")

    const [fullname,setFullname] = useState({full : "Kalvakuntla ChandraShekhar Rao"})

    const [role,setRole] = useState(["Chief Minister of Telangana"])


    const changeString=()=>{
        setString("YS Jagan")
    }

    const changeFullname=()=>{
        setFullname({full : "YS Jagan Mohan Reddy"})
    }

    const changeRole=()=>{
        setRole(["Chief Minister of Andhra Pradesh"])
    }

    return <div>
        <h2>Hello from parent function</h2>
        <hr />
        <ChildFuncFour 
        string = {string}
        fullname = {fullname}
        role = {role}
        changeString = {changeString}
        changeFullname = {changeFullname}
        changeRole = {changeRole}
        />
    </div>
}