export const ChildFuncFour=(props)=>{
    return <div>
        <button onClick={props.changeMessage}>Change Message</button>
        <p>{props.message}</p>
        <hr />
    
        <button onClick={props.changeDetails}>Change Game Name</button>
        <p>{props.details.name}</p>
        <p>{props.details.noOfPlayers}</p>
        <hr />
    
        <button onClick={props.changeArray}>Change Array</button>
        {props.arr.map((val,i)=>{
            return <p key={i}>{val}</p>
        })}
        <hr />
    </div>
    }