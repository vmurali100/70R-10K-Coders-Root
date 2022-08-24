import { useState } from "react";

function Function3() {
    const [name3, setname] = useState("Welcome to function3");
    const [obj3, setobj] = useState({ fname: "Anil", lname: "kumar" })
    const [arr3, setarr] = useState(["sri", "vini", "mani"])

    const handlename = () => {
        setname("Hello world")
    }
    const restorename = () => {
        setname("Welcome to function3")
    }


    return <div>
        <h2>Hello from function3</h2>
        <hr />

        <button onClick={handlename}>ChangeName</button> <br />
        <button onClick={restorename}>RestoreName</button>
        <p>Name:{name3} </p>



        <hr />
        <ul>Object :
            <li>{obj3.fname}</li>
            <li>{obj3.lname}</li>
        </ul>

        <hr />

        <ol>Array :
            {arr3.map((user, i) => {
                return <li>{user}</li>
            })}
        </ol>
    </div>
}

export { Function3 };