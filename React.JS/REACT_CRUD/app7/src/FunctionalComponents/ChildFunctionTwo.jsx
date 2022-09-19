

export const ChildFuncTwo = (props) => {
    return <div>

        <button onClick={props.changeMessage}>Change Message</button>
        <p>{props.message}</p>
        <hr />

        <button onClick={props.changeObject}>Change Object</button>
        <ul>
            <li>{props.object.name}</li>
            <li>{props.object.age}</li>
        </ul>
        <hr />

        <button onClick={props.changeArray}>Change Array</button>
        <ul>
            {props.array.map((val, i) => {
                return <li key={i}>{val}</li>
            })}
        </ul>

    </div>
}