import { useState } from "react";
import { ChildPlastic } from "./ChildPlastic";

export function Plastic(){
    const[message,setmessage]=useState("Hello I'm from Plastic Component")

     const[person,setperson]=useState({fname:"Choco",lname:"Puppy"})

    const[user,setuser]=useState(["Issa","Honeylet","Vaishali"])

const Changemessage=()=>{
    setmessage("Hello I'm from Setwelcome Plastic Component")
}
const Changeperson=()=>{
    setperson({fname:"Chaitanya",lname:"Sai"})
}
const Changeuser=()=>{
    setuser(["Candy","Mintu","RamaKrishna"])
}
return<div>
    <h2>Hello I'm from Functional Plastic Component</h2>
    <ChildPlastic
    message={message}
    Changemessage={Changemessage}
    person={person}
    Changeperson={Changeperson}
    user={user}
    Changeuser={Changeuser} />
</div>


}