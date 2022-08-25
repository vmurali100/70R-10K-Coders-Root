import { useState } from "react";
import { ChildFuncFour } from "./ChildFunctionFour";

export function ParentFuncFour() {
    const [course, setcourse] = useState("Front End Development");
    const [languages, setLanguages] = useState({ one : "HTML", two : "CSS" });
    const [imp, setImp] = useState(["JAVA Script","React JS"]);

    const changeCourse = () => {
        setcourse("Software Development")
    }

    const changeLanguages = () => {
        setLanguages({ one : "Java", two : "Python" })
    }

    const changeImp = () => {
        setImp(["C#","C"])
    }

    return <div>
        <h2>Hello from function parent class</h2>
        <hr />
        <ChildFuncFour
            course={course}
            languages={languages}
            imp={imp}
            changeCourse={changeCourse}
            changeLanguages={changeLanguages}
            changeImp={changeImp}
        />
    </div>

}