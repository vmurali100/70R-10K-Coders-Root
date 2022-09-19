import { useState } from "react";
import { ChildFuncFive } from "./ChildFunctionFive";

export function ParentFuncFive() {
    const [name, setname] = useState("Warangal");
    const [sub_districts, setsub_districts] = useState({ one : "Hanamknda", two : "Kazipet" });
    const [imp_places, setImp_places] = useState(["Bhadrakali Temple","Warangal Fort"]);

    const changename = () => {
        setname("Hyderabad")
    }

    const changesub_districts = () => {
        setsub_districts({ one : "Secunderabad", two : "Uppal" })
    }

    const changeImp_places = () => {
        setImp_places(["Tank Bund","Charminar"])
    }

    return <div>
        <h2>Hello from function parent class</h2>
        <hr />
        <ChildFuncFive
            name={name}
            sub_districts={sub_districts}
            imp_places={imp_places}
            changename={changename}
            changesub_districts={changesub_districts}
            changeImp_places={changeImp_places}
        />
    </div>

}