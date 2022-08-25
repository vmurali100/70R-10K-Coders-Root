export const ChildMessage =(props)=>{
return <div>
    <button onClick={props.handleChange}>change message from child</button>
<p>{props.welcomeMsg}</p>
<hr/>
<button onClick={props.changePerson}>change person</button>
<ul>
        <li>{props.person.fname}</li>
        <li>{props.person.lname}</li>
    </ul>
    <button onClick={props.changeUsers}>change users</button>
   <ul>
    {props.users.map((user,i)=>{
return <li key={i}>{user}</li>
    })
}
</ul>

</div>
}