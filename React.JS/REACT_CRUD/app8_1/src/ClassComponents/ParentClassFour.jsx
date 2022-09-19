import { Component } from "react";

import { ChildClassFour } from "./ChildClassFour";

export class ParentClassFour extends Component {
    constructor() {
        super()
        this.state = {
            message: "Hi",
            object: {
                greeting : "How are you ?",
                
            },
            array: [10,20,30]
        }
    }

    changemessage = () => {
        this.setState({ message: "Bye" })
    }

    changeobject = () => {
        this.setState({
            object: { greeting : "See You Again" }
        })
    }

    changearray = () => {
        this.setState({ array: [50,60,70] })
    }

    render() {
        return <div>
            <h2>Hello from parent class component</h2>
            <hr />
            <ChildClassFour
                message={this.state.message}
                object={this.state.object}
                array={this.state.array}
                changemessage={this.changemessage}
                changeobject={this.changeobject}
                changearray={this.changearray}
            />
        </div>
    }

}
