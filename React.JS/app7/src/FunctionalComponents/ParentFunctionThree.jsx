import { useState } from "react";
import { ChildFuncThree } from "./ChildFunctionThree";





export function ParentFuncThree() {
    const [message, setMessage] = useState("Hello I am parent function");
    const [object, setObject] = useState({ brand : "Lenovo", price : 69999 });
    const [array, setArray] = useState(["RAM:8GB","Storage:1TB"]);

    const changeMessage = () => {
        setMessage("This is from Child functional component")
    }

    const changeObject = () => {
        setObject({ brand: "HP", price : 75999 })
    }

    const changeArray = () => {
        setArray(["RAM:16GB","Storage:1.2TB"])
    }

    return <div>
        <h2>Hello from function parent class</h2>
        <hr />
        <ChildFuncThree
            message={message}
            object={object}
            array={array}
            changeMessage={changeMessage}
            changeObject={changeObject}
            changeArray={changeArray}
        />
    </div>

}