import { useState } from "react";
import { ChildFuncTwo } from "./ChildFuncTwo";



export function ParentFuncTwo(){
    const [message,setMessage] = useState("This is a good Day")

    const [object,setObject] = useState({Name : "Prudhvidhar", address : "India"})

    const [array,setArray] = useState([99,199,299])

    const changeMessage = () =>{
        setMessage("This is a good Day.I like it!")
    }

    const changeObject = () =>{
        setObject({Name : "Shravya", address : "USA"})
    }

    const changeArray = () =>{
        setArray([799,899,999])
    }

    return <div>
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