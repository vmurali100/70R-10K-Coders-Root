export const ChildFuncFour=(props)=>{
    return <div>
  
      <h2>Hello from Child Function</h2>
      <button onClick={props.changeString}>Change Message</button>
      <p> Name : {props.string}</p>
      <hr />
  
      <button onClick={props.changeFullname}>Change Object</button>
      <p>{props.fullname.full}</p>

      <hr />
  
      <button onClick={props.changeRole}>Change Array</button>
      {props.role.map((val,i)=>{
          return <p key={i}>{val}</p>
      })}
      <hr />
    </div>
  }