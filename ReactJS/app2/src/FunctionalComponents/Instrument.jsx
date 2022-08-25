import {useState } from "react";
import { ChildInstrument } from "./ChildInstrument";

export function Instrument(){
 const[welcomegreeting,setwelcomegreeting]=useState("Hiiii")

const[person,setperson]=useState({fname:"Ravi",lname:"Kumar"})

const[user,setuser]=useState(["Ramtej","Gagan","Manideep"])


const changegreeting=()=>{
    setwelcomegreeting("Hello..I hope your doing good...........")
}
const changeperson=()=>{

    setperson({fname:"Laxman",lname:"Ravan"})
}
const changeuser=()=>{
    setuser(["keerthi","Charlie","Candy"])
}
return <div>
  <h2>Hello From Invitation Functional component</h2>
  <ChildInstrument
  welcomegreeting={welcomegreeting} 
  changegreeting={changegreeting}
  person={person}
  changeperson={changeperson}
  user={user}
  changeuser={changeuser}
  />

</div>


}