

export const ChildFuncThree = (props) => {
    return <div>

        <button onClick={props.changeMessage}>Change Message</button>
        <p>{props.message}</p>
        <hr />

        <button onClick={props.changeObject}>Change Object details</button>
        <ul>
            <li>{props.object.brand}</li>
            <li>{props.object.price}</li>
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