export const ChildFunction=(props)=>{
    return <div>
        <h2>Hello from child function</h2>
        <button onClick={props.changeMessage}>Change Message</button>
        <p>Message : {props.message}</p>
        <hr />

        <button onClick={props.changeObject}>Change Object</button>
        <ul>
            <li>{props.object.company}</li>
            <li>{props.object.model}</li>
            <li>{props.object.price}</li>

        </ul>
        <hr />

        <button onClick={props.changeArray}>Change Array</button>
        {props.array.map((val,i)=>{
            return <p key={i}>{val}</p>
        })}
    </div>
}