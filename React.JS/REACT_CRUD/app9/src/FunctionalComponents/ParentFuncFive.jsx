import { useState } from "react";
import { ChildFuncFive } from "./ChildFuncFive";



export function ParentFuncFive(){
    const [message,setMessage] = useState("Parent Function")

    const [user,setuser] = useState({Name : "Prudhvidhar", state : "Telangana"})

    const [details,setdetails] = useState(["height : 165cm", "weight : 68kg"])

    const changeMessage = () =>{
        setMessage("Child Function")
    }

    const changeuser = () =>{
        setuser({Name : "Manasa", state : "Kerela"})
    }

    const changedetails = () =>{
        setdetails(["height : 155cm","weight : 55kg" ])
    }

    return <div>
        <ChildFuncFive
         message = {message}
         user = {user}
         details = {details}
         changeMessage = {changeMessage}
         changeuser = {changeuser}
         changedetails = {changedetails}
        />
    </div>
}