import { useState } from "react";
import { ChildFuncThree } from "./ChildFuncThree";

export function ParentFuncThree(){
    const [message,setMessage] = useState("I am from Parent Function")

    const [company,setcompany] = useState({Name : "Google", CEO : "Sundar Pichai"})

    const [comArray,setcomArray] = useState(["Location : USA"])

    const changeMessage = () =>{
        setMessage("I am from Child Function")
    }

    const changeCompany = () =>{
        setcompany({Name : "Microsoft", CEO : "Satya Nadella"})
    }

    const changeComArray = () =>{
        setcomArray(["location : California" ])
    }

    return <div>
        <ChildFuncThree
         message = {message}
         company = {company}
         comArray = {comArray}
         changeMessage = {changeMessage}
         changeCompany = {changeCompany}
         changeComArray = {changeComArray}
        />
    </div>
}