import { Component } from "react";

import { ChildClassThree } from "./ChildClassThree";

export class ParentClassThree extends Component {
    constructor() {
        super()
        this.state = {
            car: "Santro",
            specifications: {
                engine : "1.1 litre",
                Fuel_type: "Petrol",
               
            },
            alternate: ["Swift"]
        }
    }

    changecar = () => {
        this.setState({ car: "Seltos" })
    }

    changespecifications = () => {
        this.setState({
            specifications: { engine : "1.6 Litre", Fuel_type : "Petrol" }
        })
    }

    changealternate = () => {
        this.setState({ alternate: ["Creta"] })
    }

    render() {
        return <div>
            <h2>Hello from parent class component</h2>
            <hr />
            <ChildClassThree
                car={this.state.car}
                specifications={this.state.specifications}
                alternate={this.state.alternate}
                changecar={this.changecar}
                changespecifications={this.changespecifications}
                changealternate={this.changealternate}
            />
        </div>
    }

}
