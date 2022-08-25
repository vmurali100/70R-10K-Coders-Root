import { useState } from "react";
import { ChildTool } from "./ChildTool";

export function Tool(){
    const[wishes, setwishes]=useState("Happy Birthday")
    const[details,setdetails]=useState({address:"Perkstreet",city:"TS"})
    const[data,setdata]=useState(["Mary","lilly","Rosy"])

    const changewishes=()=>{
        setwishes(" Happy Wedding Anniversery")
    }
    const changedetails=()=>{
        setdetails({address:"NarkoulRoad",city:"AP"})
    }
    const changedata=()=>{
        setdata(["Rocky","Romeo","Juliet"])
    }
    return<div>
        <h2>Hello from Functional Tool Component</h2>
        <ChildTool
        wishes={wishes}
        changewishes={changewishes}
        details={details}
        changedetails={changedetails}
        data={data}
        changedata={changedata}/>
    </div>








}