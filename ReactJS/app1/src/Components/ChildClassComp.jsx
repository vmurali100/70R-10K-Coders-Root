import { Component } from "react";

export class ChildClassComp extends Component{
    constructor(props){
        super()
        console.log(props)
    }
    render(){
        return <div>
            <h2>Hello from Child Component</h2>
            <p> Message From Parent Component : {this.props.msg}</p> 

            {/* //it means we can pass one particular section here */}

            {Object.keys(this.props.userDetails).map((val,i)=>{
                return <p key={i}>{this.props.userDetails[val]}</p>
            })}

            <ul>
            {this.props.allStudents.map((student,i)=>{
                return <li key={i}>{student}</li>
            })}
            </ul>


            {/* we cannot display the object direct, we have to convert it too Array using object.keys */}
            <hr />
            {/* we can send the data from one component to other component*/}
            {/* If we are sending data from parent component to child component then in child component it is called as props */}
            <h4>This Child component will get displayed using parent component and props is similar as state which is used in child component and props cannot be modified</h4>
        </div>
    }
}