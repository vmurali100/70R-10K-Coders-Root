export const ChildFuncTwo=(props)=>{
    return <div>
        <button onClick={props.changeString}>Change String</button>
        <p>{props.string}</p>
        <hr />

        <button onClick={props.changeObject}>Change Object</button>
        <p>{props.object.fname}</p>
        <p>{props.object.lname}</p>
        <hr />

        <button onClick={props.changeArray}>Change Array</button>
        {props.array.map((val,i)=>{
            return <p key={i}>{val}</p>
        })}
        <hr />
    </div>
}