export const Childfirst = (props) => {
    return <div>
        <button onClick={props.handlechange}>changefromchildmsg</button>
        <p>{props.welcomemsg}</p>


        <hr />
        <button onClick={props.setperson}>changeperson</button>
        {props.person.fname}{props.person.lname}

        <hr />

        <button onClick={props.changeusers}>changeusers</button>
        {props.array.map((val, i) => {
            return <p key={i}>{val}</p>
        })}
    </div>
}