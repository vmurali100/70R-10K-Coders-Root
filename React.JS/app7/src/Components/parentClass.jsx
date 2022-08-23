import { Component } from "react";
import { ChildClassCompTwo } from "./childClass";



export class ParentClassComp extends Component {
    constructor() {
        super()
        this.state = {
            welcomeMsg: "Hello",
            car : {
                model: "Santro",
                price: 580000
            },
            car_make: ["Hyundai", "Maruthi"]
        }
    }

    changeMessage = () => {
        this.setState({ welcomeMsg: "I am going to change by handleMessage method" })
    }

    changeCar = () => {
        this.setState({
            car: {
                model: "Brezza",
                price: "1200000"
            }
        })
    }

    changeCar_make=()=>{
        this.setState({car_make : ["Ford","VolksWagen"]})
    }

    render(){
        return <div>
            <h2>Hello from parent Component</h2>
            <hr />
            <ChildClassCompTwo
              msg={this.state.welcomeMsg}
              car={this.state.car}
              car_make={this.state.car_make}
              changeMessage={this.changeMessage}
              changeCar={this.changeCar}
              changeCar_make={this.changeCar_make}
              />
            
            
        </div>
    }
}