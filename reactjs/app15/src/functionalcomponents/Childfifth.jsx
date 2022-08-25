export const Childfifth=(props)=>{
    return <div>
    <button onClick={props.handlechange}>changefromchildmsg</button>
       <p>{props.txtmsg}</p>


       <hr />
       <button onClick={props.setperson}>changeperson</button>
       {props.virtual.fname}{props.virtual.lname}

       <hr />

       <button onClick={props.changeusers}>changeusers</button>
       {props.sigma.map((val, i) => {
           return <p key={i}>{val}</p>
       })}
</div>
}