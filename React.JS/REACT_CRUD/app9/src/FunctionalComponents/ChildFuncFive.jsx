export const ChildFuncFive = (props) => {
    return <div>
        <button onClick={props.changeMessage}>Change Message</button>
        <p> Message  : {props.message}</p>
        <hr />

        <button onClick={props.changeuser}>Change User</button>
        <p>{props.user.Name}</p>
        <p>{props.user.state}</p>
        <hr />

        <button onClick={props.changedetails}>Change Array</button>
        {props.details.map(((val, i) => {
            return <p key={i}>{val}</p>
        }))}
        <hr />
    </div>
}