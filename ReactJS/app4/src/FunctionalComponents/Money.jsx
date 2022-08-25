import { useState } from "react";
import { ChildMoney } from "./ChildMoney";

export function Money(){
    const[prayer, setprayer]=useState("I hope all are healthy")
    const[info,setinfo]=useState({email:"keer@gmail.com",city:"TS"})
    const[things,setthings]=useState(["Table","Book","Pen"])


    const changeprayer=()=>{
        setprayer("Please take of your health.....")
    }
    const changeinfo=()=>{
        setinfo({email:"pra@gmail.com",city:"AP"})
    }
    const changethings=()=>{
        setthings(["Bottle","Card","Chair"])
    }
    return<div>
        <h2>Hello I'm From Functional Money Component</h2>
        <ChildMoney
        prayer={prayer}
        changeprayer={changeprayer}
        info={info}
        changeinfo={changeinfo}
        things={things}
        changethings={changethings}/>
    </div>
    

}