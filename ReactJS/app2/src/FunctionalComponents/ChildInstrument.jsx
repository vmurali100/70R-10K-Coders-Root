export const ChildInstrument=(props)=>{
    return <div>
        <button onClick={props.changegreeting}> Change Greeting</button>
        <p>{props.welcomegreeting}</p>

      <ul>
        <button onClick={props.changeperson}> Change Person</button>
        <li>{props.person.fname}</li>
        <li>{props.person.lname}</li>
        </ul>
   
        <button onClick={props.changeuser}> Change User</button>
        <ul>
        {props.user.map((user,i)=>{
        return<li key={i}>{user}</li>

        })}
        </ul>

    </div>
}