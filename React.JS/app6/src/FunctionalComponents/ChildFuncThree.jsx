export const ChildFuncThree=(props)=>{
return <div>
    <button onClick={props.changeMessage}>Change Message</button>
    <p>{props.message}</p>
    <hr />

    <button onClick={props.changeDetails}>Change Details</button>
    <p>{props.details.book}</p>
    <p>{props.details.price}</p>
    <hr />

    <button onClick={props.changeArray}>Change Array</button>
    {props.arr.map((val,i)=>{
        return <p key={i}>{val}</p>
    })}
    <hr />
</div>
}