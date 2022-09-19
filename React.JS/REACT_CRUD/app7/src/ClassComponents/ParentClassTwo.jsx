import { Component } from "react";
import { ChildClassCompTwo } from "./ChildClassTwo";





export class ParentClassCompTwo extends Component {
    constructor() {
        super()
        this.state = {
             message : "Hello",
            cycle : {
                model: "TrailBlaze",
                price: 12000
            },
            cycle_make: ["Hercules"]
        }
    }

    changeMessage = () => {
        this.setState({ message: "Hi Prudhvidhar from parent class Two" })
    }

    changecycle = () => {
        this.setState({
            cycle: {
                model: "Atlas",
                price: "5600"
            }
        })
    }

    changecycle_make=()=>{
        this.setState({cycle_make : ["Hero"]})
    }

    render(){
        return <div>
            <h2>Hello from parent Component</h2>
            <hr />
            <ChildClassCompTwo
              msg={this.state.message}
              cycle={this.state.cycle}
              cycle_make={this.state.cycle_make}
              changeMessage={this.changeMessage}
              changecycle={this.changecycle}
              changecycle_make={this.changecycle_make}
              />
            
            
        </div>
    }
}