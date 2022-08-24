import { useState } from "react"
import { Function2 } from "./Function2"
import { Function3 } from "./Function3"

export function Function1() {
    const [welcomemsg, setwelcmemsg] = useState("Hello World")
    const [obj, setobj] = useState({ fname: "meena", lname: "seelam" })
    const [arr, setarray] = useState(["apple", "mango", "orange"])

    const handlemsg = () => {
        setwelcmemsg("I am going to change by setwelcmemsg")
    }

    const handleobj = () => {
        setobj({ fname: "seelam", lname: "sri" })
    }

    const handlearray = () => {
        setarray(["red", "blue", "green"])
    }

    return <div>
        <h1>Hello from Functional Component</h1>
        <Function3/>
        <Function2
            welcomemsg={welcomemsg}
            handlemsg={handlemsg}
            obj={obj}
            handleobj={handleobj}
            arr={arr}
            handlearray={handlearray}


        />
        {/* <h2>Hello from functional Component-string</h2>
        <button onClick={handlemsg}>Changemsg</button>
        <p>Message : {welcomemsg}</p>
        <hr />
        <h2>Hello from functional component-object</h2>
        <button onClick={handleobj}>changeobj</button>
        <ul>
            <li>{obj.fname}</li>
            <li>{obj.lname}</li>
        </ul>
        <hr />
        <h2>Hello from functional array</h2>
        <button onClick={handlearray}>changearray</button>
        <ol>
          {arr.map((ele,i)=>{
            return <li key={i}>{ele}</li>
          })}
        </ol> */}
    </div>
}