import { Component } from "react";
import { ChildClassCompFour } from "./ChildClassFour";






export class ParentClassCompFour extends Component {
    constructor() {
        super()
        this.state = {
            state : "Telangana",
            cabinet : {
                CM : "KCR",
                IT_Minister: "KTR"
            },
            others : ["Srinivas Yadav","Balka Suman"]
        }
    }

    changeState = () => {
        this.setState({ state: "Andhra Pradesh" })
    }

    changeCabinet = () => {
        this.setState({
            cabinet: {
                CM : "YS Jagan",
                IT_Minister: "Lokesh"
            }
        })
    }

    changeOthers=()=>{
        this.setState({others: ["Gauthan","Roja"]})
    }

    render(){
        return <div>
            <h2>Hello from parent Component</h2>
            <hr />
            <ChildClassCompFour
              state={this.state.state}
              cabinet={this.state.cabinet}
              others={this.state.others}
              changeState={this.changeState}
              changeCabinet={this.changeCabinet}
              changeOthers={this.changeOthers}
              />
            
            
        </div>
    }
}