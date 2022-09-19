export const ChildFuncOne = (props) => {
    return <div>
        <button onClick={props.changeMessage}>Change Message</button>
        <p> Changed Message is  : {props.message}</p>
        <hr />

        <button onClick={props.changeUser}>Change User</button>
        <p>{props.user.company}</p>
        <p>{props.user.salary}</p>
        <hr />

        <button onClick={props.changeArray}>Change Array</button>
        {props.array.map(((val, i) => {
            return <p key={i}>{val}</p>
        }))}
    </div>
}