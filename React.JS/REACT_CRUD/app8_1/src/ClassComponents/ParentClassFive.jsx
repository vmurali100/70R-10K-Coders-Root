import { Component } from "react";
import { ChildClassFive } from "./ChildClassFive";


export class ParentClassFive extends Component {
    constructor() {
        super()
        this.state = {
            state: "Telangana",
            capital: {
                capital_city : "Hyderabad",
                
            },
            next_capital: ["Karimnagar"]
        }
    }

    changestate = () => {
        this.setState({ state: "Andhra Pradesh" })
    }

    changecapital = () => {
        this.setState({
            capital: { capital_city: "Guntur" }
        })
    }

    changenext_capital=()=>{
        this.setState({next_capital : ["Visakhapatnam"]})
    }

    render(){
        return <div>
            <h2>Hello from parent class component</h2>
            <hr />
            <ChildClassFive
              state = {this.state.state}
              capital = {this.state.capital}
              next_capital = {this.state.next_capital}
              changestate = {this.changestate}
              changecapital = {this.changecapital}
              changenext_capital = {this.changenext_capital}  
                />
        </div>
    }

}
