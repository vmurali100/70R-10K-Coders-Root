import { useState } from "react";
import { ChildFuncTwo } from "./ChildFunctionTwo";




export function ParentFuncTwo() {
    const [message, setMessage] = useState("Hello I am parent function");
    const [object, setObject] = useState({ name : "Prudhvi", age : 28 });
    const [array, setArray] = useState([1,2,3]);

    const changeMessage = () => {
        setMessage("This is from parent functional component")
    }

    const changeObject = () => {
        setObject({ name: "Shravya", age : 27 })
    }

    const changeArray = () => {
        setArray([11,22,33])
    }

    return <div>
        <h2>Hello from function parent class</h2>
        <hr />
        <ChildFuncTwo 
            message={message}
            object={object}
            array={array}
            changeMessage={changeMessage}
            changeObject={changeObject}
            changeArray={changeArray}
        />
    </div>

}