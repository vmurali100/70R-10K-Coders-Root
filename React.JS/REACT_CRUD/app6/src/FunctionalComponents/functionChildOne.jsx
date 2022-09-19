

export const ChildMessage = (props) => {
    return <div>
        <button onClick={props.changeMessage}>Change Message</button>
        <p>{props.welcomeMsg}</p>
        <hr />

        <button onClick={props.changePerson}>Chnage Person</button>
        <ul>
            <li>{props.person.fname}</li>
            <li>{props.person.lname}</li>
        </ul>
        <hr />

        <button onClick={props.changeUsers}>Change Users</button>
        <ul>
            {props.users.map((val,i)=>{
                return <li key={i}>{val}</li>
            })}
        </ul>
    </div>
}