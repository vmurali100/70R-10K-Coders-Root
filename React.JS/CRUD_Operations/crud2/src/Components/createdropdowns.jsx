import React from "react";

import { useState } from "react";

export const DropDown = () => {
    const [branch, setbranch] = useState(["CSE", "ECE", "EEE", "IT", "CE"]);

    const [selectedBranch, setselectedBranch] = useState("")

    const getBranch = (e) => {
        setselectedBranch(e.target.value);
        console.log(e.target.value)
    }

    return (
        <div>
            Branch : <select
             value={selectedBranch} 
             onChange={(e) => { getBranch(e) }}
             >
                {branch.map((brc, i) => (
                <option value={brc} key={i}>{brc}</option>
            ))}</select>
        </div>
    )

}