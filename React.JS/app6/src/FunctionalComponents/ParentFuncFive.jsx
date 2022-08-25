import { useState } from "react";
import { ChildFuncFive } from "./ChildFuncFive";




export function ParentFuncFive() {
    const [message, setMessage] = useState("This is a Message before change")
    const [bike, setBike] = useState({
        name : "Grazia",
        cc: 125
    })
    const [brand, setBrand] = useState(["Honda"])

    const changeMessage = () => {
        setMessage("This is a message after change")
    }

    const changeBike = () => {
        setBike({ name : "Pleasure", cc: 115 })
    }

    const changeBrand = () => {
        setBrand(["Hero"])
    }

    return <div>
        <ChildFuncFive   
        message = {message}
        bike = {bike}
        brand = {brand}
        changeBike = {changeBike}
        changeBrand = {changeBrand}
        changeMessage = {changeMessage}
         />
    </div>

}
