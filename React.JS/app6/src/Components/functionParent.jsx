import { useState } from "react";
import { ChildMessage } from "./functionChild";

export function Message() {
    const [welcomeMsg, setWelcomeMsg] = useState("Hello World");
    const [person, setPerson] = useState({ fname: "Prudhvi", lname: "Rathna" });
    const [users, setUsers] = useState(["Sam", "Chaithu"]);

    const changeMessage = () => {
        setWelcomeMsg("This is from parent functional component")
    }

    const changePerson = () => {
        setPerson({ fname: "Vinay", lname: "Kumar" })
    }

    const changeUsers = () => {
        setUsers(["KCR", "KTR"])
    }

    return <div>
        <h2>Hello from function parent class</h2>
        <hr />
        <ChildMessage
            welcomeMsg={welcomeMsg}
            person={person}
            users={users}
            changeMessage={changeMessage}
            changePerson={changePerson}

            changeUsers={changeUsers}
        />
    </div>

}