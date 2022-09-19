import { Component } from "react";
import {  ChildClassTwo } from "./ChildClassTwo";


export class ParentClassTwo extends Component {
    constructor() {
        super()
        this.state = {
            name: "Prudhvi",
            details : {
                fname : "Prudhvidhar",
                lname : "Rathna",
                
            },
            city: ["Warangal"]
        }
    }

    changeName = () => {
        this.setState({ name: "Manoj" })
    }

    changeDetails = () => {
        this.setState({
            details: { fname: "Manoj Kumar", lname : "Rathnaa" }
        })
    }

    changeCity=()=>{
        this.setState({city : ["Hanamkonda"]})
    }

    render(){
        return <div>
            <h2>Hello from parent class component</h2>
            <hr />
            <ChildClassTwo
              name = {this.state.name}
              details = {this.state.details}
              city = {this.state.city}
              changeName = {this.changeName}
              changeDetails = {this.changeDetails}
              changeCity = {this.changeCity}  
                />
        </div>
    }

}
