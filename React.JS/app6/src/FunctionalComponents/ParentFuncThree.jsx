import { useState } from "react";

import { ChildFuncThree } from "./ChildFuncThree";

export function ParentFuncThree() {
    const [message, setMessage] = useState("This is a Message before change")
    const [details, setDetails] = useState({
        book: "Into the wild",
        price: 450
    })
    const [arr, setArr] = useState([150, 250, 350])

    const changeMessage = () => {
        setMessage("This is a message after change")
    }

    const changeDetails = () => {
        setDetails({ book: "The Kite Runner", price: 669 })
    }

    const changeArray = () => {
        setArr([450, 550, 650])
    }

    return <div>
        <ChildFuncThree  
        message = {message}
        details = {details}
        arr = {arr}
        changeArray = {changeArray}
        changeDetails = {changeDetails}
        changeMessage = {changeMessage}
         />
    </div>

}
