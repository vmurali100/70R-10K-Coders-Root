export const ChildMoney=(props)=>{
    return<div>
    <button onClick={props.changeprayer}> Change Prayer</button>
    <p>{props.prayer}</p>
    <button onClick={props.changeinfo}> Change Info</button>
<ul>
    <li>{props.info.email} </li>
    <li>{props.info.city} </li>
</ul>
    <button onClick={props.changethings}> Change things</button>
<ul>
    {props.things.map((things,i)=>{
  return<li key={i}>{things}</li>
    })}
</ul>
    </div>
}