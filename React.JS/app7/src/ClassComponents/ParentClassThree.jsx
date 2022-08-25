import { Component } from "react";
import { ChildClassCompThree } from "./ChildClassThree";





export class ParentClassCompThree extends Component {
    constructor() {
        super()
        this.state = {
             name : "Jishitha",
            details : {
                company: "TCS",
                location: "Hyderabad"
            },
            cur_location: ["Warangal"]
        }
    }

    changeName = () => {
        this.setState({ name: "Shravya" })
    }

    changeDetails = () => {
        this.setState({
            details: {
                company: "Intel",
                location: "Bangalore"
            }
        })
    }

    changeCur_location=()=>{
        this.setState({cur_location : ["Khammam"]})
    }

    render(){
        return <div>
            <h2>Hello from parent Component</h2>
            <hr />
            <ChildClassCompThree
              name={this.state.name}
              details={this.state.details}
              cur_location={this.state.cur_location}
              changeName={this.changeName}
              changeDetails={this.changeDetails}
              changeCur_location={this.changeCur_location}
              />
            
            
        </div>
    }
}