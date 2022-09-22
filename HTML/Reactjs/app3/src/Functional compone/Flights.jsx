import { useState } from "react";



export function Mobile() {
    var [ChatMessage, setChatMessage] = useState("heloo world");
    var [Person, setPerson] = useState({ fname: "Satish", lname: "sunny" });
    var [User, setUser] = useState(["sai", "sunny", "prudhvi"])



    var handleChnage = () => {
        setChatMessage("i am fine ")
    }

    var changePerson = () => {
        setPerson({ fname: "Ravi", lname: "Shakar" })
    }
var changeUser = () => {
        setUser(["satish", "sunil", "ravi"])
    }




    return <div>
        <h2>hello to function</h2>
        <button onClick={handleChnage}>change message</button>
        <p>Message:{ChatMessage}</p>

        <hr />
        <button onClick={changePerson}>meaage</button>
        <ul>
            <li>{Person.fname}</li>
            <li>{Person.lname}</li>
        </ul>

        <hr />
<button onClick={changeUser}>changeuser</button>
<ul>
   {User.map((user,i)=>{
    return <li key={i}>{user}</li>
   })}
</ul>


    </div>
}

