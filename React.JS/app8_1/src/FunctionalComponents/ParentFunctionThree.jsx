import { useState } from "react";
import { ChildFuncThree } from "./ChildFunctionThree";



export function ParentFuncThree(){
    const [message,setMessage] = useState("My mobile details")

    const [object,setObject] = useState({brand : "vivo",model : "v7", price : 16999})

    const [array,setArray] = useState(["Alternate : Oppo mobile"])


    const changeMessage=()=>{
        setMessage("My another mobile Details")
    }

    const changeObject=()=>{
        setObject({brand : "apple",model : "iphone11", price : 49999})
    }

    const changeArray=()=>{
        setArray(["Alternate : One Plus Mobile"])
    }

    return <div>
        <h2>Hello from parent function</h2>
        <hr />
        <ChildFuncThree 
        message = {message}
        object = {object}
        array = {array}
        changeMessage = {changeMessage}
        changeObject = {changeObject}
        changeArray = {changeArray}
        />
    </div>
}