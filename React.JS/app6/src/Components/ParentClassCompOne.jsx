import { Component } from "react";
import { ChildClassComp } from "./ChildClassComp";

export class ParentClassComp extends Component {
    constructor() {
        super()
        this.state = {
            welcomeMsg: "Hello World",
            user: {
                fname: "Prudhvidhar",
                lname: "Rathna"
            },
            students: ["Kiran", "Kumar"]
        }
    }

    changeMessage = () => {
        this.setState({ welcomeMsg: "I am going to change by handleMessage method" })
    }

    changeUser = () => {
        this.setState({
            user: {
                fname: "Manoj",
                lname: "Reddy"
            }
        })
    }

    changeStudent=()=>{
        this.setState({students : ["Prudhvi","Srujay"]})
    }

    render(){
        return <div>
            <h2>Hello from parent Component</h2>
            <hr />
            <ChildClassComp 
              msg={this.state.welcomeMsg}
              userDetails={this.state.user}
              allStudents={this.state.students}
              changeMessageOne={this.changeMessage}
              changeUserOne={this.changeUser}
              changeStudentOne={this.changeStudent}
              />
            
        </div>
    }
}