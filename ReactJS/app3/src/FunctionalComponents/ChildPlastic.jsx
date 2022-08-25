export const ChildPlastic=(props)=>{
    return<div>
<button onClick={props.Changemessage}> Change Message</button>
<p>{props.message}</p>

<button onClick={props.Changeperson}> Change Person</button>
<ul>
    <li>{props.person.fname}</li>
    <li>{props.person.lname}</li>

</ul>

<button onClick={props.Changeuser}> Change User</button>
<ul>
    {props.user.map((user,i)=>{
        return<li key={i}>{user}</li>
    })}
</ul>
    </div>
}