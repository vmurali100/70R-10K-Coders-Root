import { useState } from "react";
import { ChildFuncTwo } from "./ChildFuncTwo";

export function ParentFunctionTwo(){
    const [string,setString] = useState("Hi I am string before change")
    const [object,setObject] = useState({fname : "Prudhvi", lname : "Reddy"})
    const [array,setArray]   = useState([111,222,333])

    const changeString=()=>{
        setString("Hi I am string after change")
    }

    const changeObject=()=>{
        setObject({fname : "Manoj", lname : "Rathna"})
    }

    const changeArray=()=>{
        setArray([444,555,666])
    }

    return <div>
        <ChildFuncTwo
        string = {string}
        object = {object}
        array  = {array}
        changeString = {changeString}
        changeObject = {changeObject}
        changeArray  = {changeArray}
         />

    </div>
} 