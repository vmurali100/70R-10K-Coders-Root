import { useState } from "react";
import { ChildFuncFive } from "./ChildFunctionFive";



export function ParentFuncFive(){
    const [message,setMessage] = useState("Prudhvidhar Reddy")

    const [object,setObject] = useState({job : "Front end Developer"})

    const [array,setArray] = useState(["Salary : 6LPA"])


    const changeMessage=()=>{
        setMessage("Manasa")
    }

    const changeObject=()=>{
        setObject({job : "UI/UX Developer"})
    }

    const changeArray=()=>{
        setArray(["Salary : 8LPA"])
    }

    return <div>
        <h2>Hello from parent function</h2>
        <hr />
        <ChildFuncFive 
        message = {message}
        object = {object}
        array = {array}
        changeMessage = {changeMessage}
        changeObject = {changeObject}
        changeArray = {changeArray}
        />
    </div>
}