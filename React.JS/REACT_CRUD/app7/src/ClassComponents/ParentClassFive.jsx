import { Component } from "react";
import { ChildClassCompFive } from "./ChildClassFive";

export class ParentClassCompFive extends Component {
    constructor() {
        super()
        this.state = {
             message : "Prudhvidhar",
             personal : {
                father: "Thirupathi Reddy",
                mother : "Padma"
            },
           location : ["Warangal"]
        }
    }

    changeMessage = () => {
        this.setState({ message: "Uday Kiran" })
    }

    changepersonal = () => {
        this.setState({
            personal: {
                father: "RaghavaChary",
                mother: "Padmaja"
            }
        })
    }

    changelocation=()=>{
        this.setState({location : ["Hyderabad"]})
    }

    render(){
        return <div>
            <h2>Hello from parent Component</h2>
            <hr />
            <ChildClassCompFive
              msg={this.state.message}
              personal={this.state.personal}
              location={this.state.location}
              changeMessage={this.changeMessage}
              changepersonal={this.changepersonal}
              changelocation={this.changelocation}
              />
            
            
        </div>
    }
}