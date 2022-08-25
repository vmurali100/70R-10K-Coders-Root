export const ChildFuncFive=(props)=>{
    return <div>
  
      <h2>Hello from Child Function</h2>
      <button onClick={props.changeMessage}>Change Message</button>
      <p> Full Name of Employee : {props.message}</p>
      <hr />
  
      <button onClick={props.changeObject}>Change Object</button>
      <p>{props.object.job}</p>
      
      <hr />
  
      <button onClick={props.changeArray}>Change Array</button>
      {props.array.map((val,i)=>{
          return <p key={i}>{val}</p>
      })}
      <hr />
    </div>
  }