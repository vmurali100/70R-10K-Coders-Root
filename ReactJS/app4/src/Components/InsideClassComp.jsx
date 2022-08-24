import { Component } from "react";

export class InsideClassComp extends Component{
    constructor(props){
        super()
        console.log(props)
    }

    

    render(){
        return <div>
            <h2>Hello from Child Component Body</h2>
            <button onClick={this.props.changeMessage}>Change Message</button>

            <p> Message From Parent Component : {this.props.msg}</p> 

            {/* //it means we can pass one particular section here */}

            {Object.keys(this.props.listDetails).map((val,i)=>{
                return <p key={i}>{this.props.listDetails[val]}</p>
            })}

            <ul>
            {this.props.allUsers.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
            </ul>


            {/* we cannot display the object direct, we have to convert it too Array using object.keys */}
            <hr />
            {/* we can send the data from one component to other component*/}
            {/* If we are sending data from parent component to child component then in child component it is called as props */}
            {/* <h4>This Child component will get displayed using parent component and props is similar as state which is used in child component and props cannot be modified</h4> */}
        </div>
    }
}