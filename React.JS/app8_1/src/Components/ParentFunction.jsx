import { useState } from "react";
import { ChildFunctionThree } from "./ChildFunction";

export function ParentFunctionThree(){
    const [message,setMessage] = useState("Hi")

    const [object,setObject] = useState({fname : "Prudhvidhar",lname : "Rathna"})

    const [array,setArray] = useState([10,20,30])


    const changeMessage=()=>{
        setMessage("Welcome again")
    }

    const changeObject=()=>{
        setObject({fname : "Shravya",lname : "Rathna"})
    }

    const changeArray=()=>{
        setArray([100,200])
    }

    return <div>
        <h2>Hello from parent function</h2>
        <hr />
        <ChildFunctionThree 
        message = {message}
        object = {object}
        array = {array}
        changeMessage = {changeMessage}
        changeObject = {changeObject}
        changeArray = {changeArray}
        />
    </div>
}