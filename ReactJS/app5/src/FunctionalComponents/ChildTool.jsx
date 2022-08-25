export const ChildTool=(props)=>{
    return<div>
<button onClick={props.changewishes}>Change Wishes</button>
<p>{props.wishes}</p>

<button onClick={props.changedetails}>Change Details</button>
<ul>
    <li>{props.details.address}</li>
    <li>{props.details.city}</li>
</ul>

<button onClick={props.changedata}>Change Data</button>
<ul>
    {props.data.map((data,i)=>{
        return<li key={i}>{data}</li>
    }
    )}
</ul>


    </div>
}