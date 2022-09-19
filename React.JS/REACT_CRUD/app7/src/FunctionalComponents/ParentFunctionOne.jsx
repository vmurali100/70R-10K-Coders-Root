import { useState } from "react";

import { ChildFuncOne } from "./ChildFunctionOne";


export function ParentFuncOne() {
    const [welcomeMsg, setWelcomeMsg] = useState("Hello I am parent function");
    const [car, setCar] = useState({ model: "Swift", price: "700000" });
    const [make, setMake] = useState(["Maruthi", "Suzuki"]);

    const changeMessage = () => {
        setWelcomeMsg("This is from parent functional component")
    }

    const changeCar = () => {
        setCar({ model: "Ecosport", price: "950000" })
    }

    const changeMake = () => {
        setMake(["Ford", "USA"])
    }

    return <div>
        <h2>Hello from function parent class</h2>
        <hr />
        <ChildFuncOne 
            welcomeMsg={welcomeMsg}
            car={car}
            make={make}
            changeMessage={changeMessage}
            changeCar={changeCar}
            changeMake={changeMake}
        />
    </div>

}