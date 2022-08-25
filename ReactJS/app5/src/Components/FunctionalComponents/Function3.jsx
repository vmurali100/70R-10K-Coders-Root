export const Function3=(props)=>{
    return <div>
        <button onClick={props.handleName}>changeName</button>
        <p>{props.name}</p>
        <hr />
    <button onClick={props.handleObj}>Changeobject</button>
    <li>{props.obj.fname}</li>
    <li>{props.obj.lname}</li>
    <hr />
    <button onClick={props.handleArr}>ChangeArray</button>
    {props.arr.map((val,i)=>{
        return <li key={i}>
            {val}
        </li>
    })}
    </div>
}