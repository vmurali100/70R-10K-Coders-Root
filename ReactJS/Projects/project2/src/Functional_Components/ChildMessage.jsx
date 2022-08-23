export const ChildMessage=(props)=>{
    return <div>
        <h3>1.String</h3>
        <button onClick={props.handleMessage}>Change Message From Child</button>
        <p>Message : {props.displayMsg}</p>
        <hr />
        

        <h3>2.Object</h3>
        <button onClick={props.handlePerson}>Change Person From Child</button>
        <ul>
            <li>{props.displayPerson.fname}</li>
            <li>{props.displayPerson.lname}</li>
        </ul>
        <hr />
        
        <h3>3.Array</h3>
        <button onClick={props.handleStudents}>Change Students From Child</button>
        <ul>
            {props.displayStudents.map((displayStudents,i)=>{
                return <li key={i}>{displayStudents}</li>
            })}
        </ul>
    </div>
}