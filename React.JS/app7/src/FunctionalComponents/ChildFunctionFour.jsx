

export const ChildFuncFour = (props) => {
    return <div>

        <button onClick={props.changeCourse}>Change Course</button>
        <p>{props.course}</p>
        <hr />

        <button onClick={props.changeLanguages}>Change languages details</button>
        <ul>
            <li>{props.languages.one}</li>
            <li>{props.languages.two}</li>
        </ul>
        <hr />

        <button onClick={props.changeImp}>Change Array</button>
        <ul>
            {props.imp.map((val, i) => {
                return <li key={i}>{val}</li>
            })}
        </ul>

    </div>
}