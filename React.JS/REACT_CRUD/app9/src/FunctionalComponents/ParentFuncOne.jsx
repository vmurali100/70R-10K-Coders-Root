import { useState } from "react";

import { ChildFuncOne } from "./ChildFuncOne";

export function ParentFuncOne(){
    const [message,setMessage] = useState("Hello World from Parent Function")

    const [user,setUser] = useState({company : "Meta", salary : 120000})

    const [array,setArray] = useState([10,100,1000])

    const changeMessage = () =>{
        setMessage("Hello world from Child Function")
    }

    const changeUser = () =>{
        setUser({company : "Youtube", salary : 80000})
    }

    const changeArray = () =>{
        setArray([9,99,999])
    }

    return <div>
        <ChildFuncOne
         message = {message}
         user = {user}
         array = {array}
         changeMessage = {changeMessage}
         changeUser = {changeUser}
         changeArray = {changeArray}
        />
    </div>
}