export const ChildFuncFive=(props)=>{
    return <div>
        <button onClick={props.changeMessage}>Change Message</button>
        <p>{props.message}</p>
        <hr />
    
        <button onClick={props.changeBike}>Change Bike Name</button>
        <p>{props.bike.name}</p>
        <p>{props.bike.cc}</p>
        <hr />
    
        <button onClick={props.changeBrand}>Change Brand</button>
        {props.brand.map((val,i)=>{
            return <p key={i}>{val}</p>
        })}
        <hr />
    </div>
    }