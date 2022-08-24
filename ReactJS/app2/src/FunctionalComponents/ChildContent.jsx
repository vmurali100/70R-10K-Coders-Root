export const ChildContent = (props) => {
    return <div>
        <button onClick={props.handleChange}>Change Message from child</button>
        <p>{props.welcomemsg}</p>
    </div>
}