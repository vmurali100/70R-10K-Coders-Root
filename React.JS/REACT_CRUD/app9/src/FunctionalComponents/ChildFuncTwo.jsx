export const ChildFuncTwo = (props) => {
    return <div>
        <button onClick={props.changeMessage}>Change Message</button>
        <p> Message  : {props.message}</p>
        <hr />

        <button onClick={props.changeObject}>Change User</button>
        <p>{props.object.Name}</p>
        <p>{props.object.address}</p>
        <hr />

        <button onClick={props.changeArray}>Change Array</button>
        {props.array.map(((val, i) => {
            return <p key={i}>{val}</p>
        }))}
        <hr />
    </div>
}