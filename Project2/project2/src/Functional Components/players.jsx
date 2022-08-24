export const Players =(props)=>{
    return <div>
        <button onClick={props.handleChange}>Its all about cricket</button>
        <p>{props.welcomeMsg}</p>
    
        <hr />
    
        <button onClick={props.changeFormats}>Change Format</button>
        <ul><li>{props.format.test}</li>
        <li>{props.format.oneday}</li>
        <li>{props.format.t20}</li>
        </ul>
    
        <hr />
        <button onClick={props.changePlayers}> change Players</button>
            <ul>
                {props.players.map((players,i)=>{
                    return <li key={i}>{players}</li>})}</ul>
    </div>
    }