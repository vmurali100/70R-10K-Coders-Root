import { useState } from "react";
import { ChildFuncTwo } from "./ChildFunctionTwo";



export function ParentFuncTwo(){
    const [message,setMessage] = useState("Welcome on clicking the button I will change")

    const [object,setObject] = useState({Name: "Prudhvidhar", Gender : "Male",Age : "28"})

    const [array,setArray] = useState([2222,4444,5555])


    const changeMessage=()=>{
        setMessage("I am changed")
    }

    const changeObject=()=>{
        setObject({Name : "Shravya",Gender : "Female", Age : 27})
    }

    const changeArray=()=>{
        setArray([7777,8888,9999])
    }

    return <div>
        <h2>Hello from parent function</h2>
        <hr />
        <ChildFuncTwo 
        message = {message}
        object = {object}
        array = {array}
        changeMessage = {changeMessage}
        changeObject = {changeObject}
        changeArray = {changeArray}
        />
    </div>
}