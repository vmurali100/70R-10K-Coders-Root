export const ChildMessage =(props)=>{
    return<div>
        <button onClick={props.handlechange}>change message from child </button>
        <p>{props.welcomemessage}</p>

        <hr/>

        <button onClick={props.changeperson}> Change Person</button>
        <ul>
            <li>{props.person.fname}</li>
            <li>{props.person.lname}</li>

        </ul>

        <hr/>

        <button onClick={props.changeusers}> Change Users</button>
        <ul>
            {props.users.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul> 
        </div>     
}