

export const ChildFuncFive = (props) => {
    return <div>

        <button onClick={props.changename}>Change district name</button>
        <p>District Name : {props.name}</p>
        <hr />

        <button onClick={props.changesub_districts}>Change sub sub_districts</button>
        <ul>
            <li>{props.sub_districts.one}</li>
            <li>{props.sub_districts.two}</li>
        </ul>
        <hr />

        <button onClick={props.changeImp_places}>Change places</button>
        <ul>
            {props.imp_places.map((val, i) => {
                return <li key={i}>{val}</li>
            })}
        </ul>

    </div>
}