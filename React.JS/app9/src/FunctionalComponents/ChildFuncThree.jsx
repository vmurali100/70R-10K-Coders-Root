export const ChildFuncThree = (props) => {
    return <div>
        <button onClick={props.changeMessage}>Change Message</button>
        <p> Message  : {props.message}</p>
        <hr />

        <button onClick={props.changeCompany}>Change User</button>
        <p>{props.company.Name}</p>
        <p>{props.company.CEO}</p>
        <hr />

        <button onClick={props.changeComArray}>Change Array</button>
        {props.comArray.map(((val, i) => {
            return <p key={i}>{val}</p>
        }))}
        <hr />
    </div>
}