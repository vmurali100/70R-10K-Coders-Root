import React from 'react';

import { useState } from "react";


export const DropDownTwo = () => {
    const [degree, setdegree] = useState(["BCA", "BTech", "MTech", "MCA", "PG"])

    const [selectedDegree, setselectedDegree] = useState("")

    const getDegree = (e) => {
        setselectedDegree(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            Degree : <select value={selectedDegree}
                onChange={(e) => { getDegree(e) }}
            >
                {degree.map((deg, i) =>
                    (<option value={deg} key={i}>{deg}</option>))}
            </select>
        </div>
    )
}