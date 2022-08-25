import { useState } from "react";
import { Function3 } from "./Function3";

export function Function2(){
    const [name,setName]=useState("Hello from Function2")
    const[obj,setObj]= useState({fname:"Ram",lname:"Lakshman"})
    const [arr,setarr]=useState (["Sunday","Monday","Tuesday"])

   const handleName=()=>{
        setName("Hello from function2 updated")
    }

    const handleObj=()=>{
        setObj({fname:"Rohit",lname:"Sharma"})
    }

    const handleArr=()=>{
        setarr(["Jan","Feb","March"])
    }
return <div>
    {/* <button onClick={handleName}>ChangeName</button>
    <h1>The string is :{name}</h1>
    <hr />
    <button onClick={handleObj}>Changeobject</button>
    <li>{obj.fname}</li>
    <li>{obj.lname}</li>
    <hr />
    <button onClick={handleArr}>ChangeArray</button>
    {arr.map((val,i)=>{
        return <li key={i}>
            {val}
        </li>
    })} */}
    <Function3 name={name}
    handleName={handleName}
    obj={obj}
    handleObj={handleObj}
    arr={arr}
    handleArr={handleArr}/>
</div>
}