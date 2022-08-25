

export const ChildFuncOne = (props) => {
    return <div>

        <button onClick={props.changeMessage}>Change Message</button>
        <p>{props.welcomeMsg}</p>
        <hr />

        <button onClick={props.changeCar}>Change Car</button>
        <ul>
            <li>{props.car.model}</li>
            <li>{props.car.price}</li>
        </ul>
        <hr />

        <button onClick={props.changeMake}>Change Users</button>
        <ul>
            {props.make.map((val, i) => {
                return <li key={i}>{val}</li>
            })}
        </ul>

    </div>
}