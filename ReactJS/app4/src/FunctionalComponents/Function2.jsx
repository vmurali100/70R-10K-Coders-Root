export const Function2 =(props) => {
    return <div>
    <h2>Hello from child function</h2>
    <button onClick={props.handlemsg}>Change message from child function</button>
   
        <p>Message : {props.welcomemsg}</p>
        <hr />

        <h2>Hello from functional component-object</h2>
        <button onClick={props.handleobj}>changeobj</button>
        <ul>
            <li>{props.obj.fname}</li>
            <li>{props.obj.lname}</li>
        </ul>
        <hr />
        <h2>Hello from functional component-array</h2>
        <button onClick={props.handlearray}>Change array</button>
        <ul>
            {props.arr.map((stud,i)=>{
              return <li key={i}>{stud}</li> 
            })}
            
        </ul>
    </div>
}