import { useState } from "react";
import { ChildFunction } from "./ChildFunction";

export function ParentFunction(){
    const [message,setMessage] = useState("Hello from react")

    const [array,setArray] = useState([1,11,21,31,41])

    const [object,setObject] = useState({company : "Lenovo", model : "G580"})

    const changeMessage=()=>{
        setMessage("Hello from react and 10KCoders")
    }

    const changeObject=()=>{
        setObject({company : "Lenovo", model : "G580", price : 45999})
    }

    const changeArray=()=>{
        setArray([51,61,71,81,91])
    }

    return <div>
        <h2>Hello from parent function</h2>
        <ChildFunction 
        message = {message}
        object = {object}
        array = {array}
        changeMessage = {changeMessage}
        changeObject = {changeObject}
        changeArray = {changeArray}
        />
    </div>
}