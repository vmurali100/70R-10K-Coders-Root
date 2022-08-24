export const ChildMessage =(props)=>{
return <div>
    <button onClick={props.handleChange}>Change Message From Child</button>
    <p>{props.welcomeMsg}</p>

    <hr />

    <button onClick={props.changePerson}>Chane Person</button>
    <ul><li>{props.person.fname}</li>
    <li>{props.person.lname}</li></ul>

    <hr />
    <button onClick={props.changeUsers}>Change Users</button>
        <ul>
            {props.users.map((user,i)=>{
                return <li key={i}>{user}</li>})}</ul>
</div>
}