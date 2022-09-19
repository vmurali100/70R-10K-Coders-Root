import { useState } from "react";
import { ChildFuncFour } from "./ChildFuncFour";


export function ParentFuncFour(){
    const [message,setMessage] = useState("Petroleum from Parent")

    const [company,setcompany] = useState({NameOne : "HP", NameTwo : "Indian Oil"})

    const [comArray,setcomArray] = useState(["MostUsed : HP"])

    const changeMessage = () =>{
        setMessage("Petroleum from Class")
    }

    const changeCompany = () =>{
        setcompany({NameOne : "Reliance", NameTwo : "Power Petrol"})
    }

    const changeComArray = () =>{
        setcomArray(["MostUsed : Power Petrol" ])
    }

    return <div>
        <ChildFuncFour
         message = {message}
         company = {company}
         comArray = {comArray}
         changeMessage = {changeMessage}
         changeCompany = {changeCompany}
         changeComArray = {changeComArray}
        />
    </div>
}