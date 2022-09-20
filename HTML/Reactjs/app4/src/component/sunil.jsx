import { Component } from "react";

export class Animal extends Component() {
    constructor() {
        super()
        this.state = {
            User: "hi to all"
            
        }
        //  changeMesage = () => {
        //     this.setstart = ({
        //         user: ""
        //     })

    }
    render(){
        return <p>answer:{this.state.User}</p>
    }
}



