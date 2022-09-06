import React from "react";

import { useState } from "react";

export const DropDownDating = () => {
    const [datingDD, setdatingDD] = useState(["I am a man","I am an women"]);

    const [selectedDatingDD, setselectedDatingDD] = useState("")

    const getDatingDD = (e) => {
        setselectedDatingDD(e.target.value);
        console.log(e.target.value)
    }

    const [datingDDTwo, setdatingDDTwo] = useState(["I want to find women","I want to find men"])

    const [selectedDatingDDTwo, setselectedDatingDDTwo] = useState('')

    const getDatingDDTwo=(e)=>{
        setselectedDatingDDTwo(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            <select value={selectedDatingDD} onChange={(e) => { getDatingDD(e) }}>
                {datingDD.map((dd, i) => (
                <option value={dd} key={i}>{dd}</option>
            ))}
            </select> <br />

            <select value={selectedDatingDDTwo} onChange={(e) => { getDatingDDTwo(e) }}>
                {datingDDTwo.map((ddt, i) => (
                <option value={ddt} key={i}>{ddt}</option>
            ))}
            </select>
        </div>
    )

}