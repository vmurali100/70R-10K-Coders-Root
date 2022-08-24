import { Component } from "react";
import { InsideClassComp } from "./InsideClassComp";


export class OpenClassComp extends Component {
    constructor() {
        super()
        this.state = {
            welcomemsg: "Hello from ReactJS, this is new method in class component app4, Parents is Open and Child is Inside",
            list: {
                fname: "Manasa",
                lname: "Madupu",
                email: "man@gmail.com",
                city: "Bellampalli",
                state: "Telangana"
            },
            users: ["Rakesh", "Deevi", "Chai", "Yeshhwanth"]
        }
    }
    handleChange = () => {
        this.setState({ welcomemsg: "Hello I am going to change by HandleChange Method" })
    }
    render() {
        return <div>
            <h2>Hello from Parent Component</h2>
            <hr />
            {/* <ChildClassComp {...this.state}/> */}
            {/* we can send props using two ways one is using spread operator as above statement */}
            {/* Or you can send it individual with seperate name */}
            <InsideClassComp msg={this.state.welcomemsg}
                listDetails={this.state.list}
                allUsers={this.state.users}
                changeMessage={this.handleChange} />

        </div>
    }
}

