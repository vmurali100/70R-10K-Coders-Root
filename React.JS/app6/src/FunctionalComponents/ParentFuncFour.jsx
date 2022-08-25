import { useState } from "react";
import { ChildFuncFour } from "./ChildFuncFour";



export function ParentFuncFour() {
    const [message, setMessage] = useState("This is a Message before change")
    const [details, setDetails] = useState({
        name : "Cricket",
        noOfPlayers: 11
    })
    const [arr, setArr] = useState(["50 Overs","300 Balls"])

    const changeMessage = () => {
        setMessage("This is a message after change")
    }

    const changeDetails = () => {
        setDetails({ name : "Football", noOfPlayers: 15 })
    }

    const changeArray = () => {
        setArr(["90 Minutes"])
    }

    return <div>
        <ChildFuncFour   
        message = {message}
        details = {details}
        arr = {arr}
        changeArray = {changeArray}
        changeDetails = {changeDetails}
        changeMessage = {changeMessage}
         />
    </div>

}
