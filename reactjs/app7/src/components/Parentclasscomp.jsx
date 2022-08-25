import { Component } from "react";
import { Childclasscomp } from "./Childclasscomp";

export class Parentclasscomp extends Component {
    constructor() {
        super()
        this.state = {
            welcomemsg: "hloo from the parent/state ",
            user: {
                fname: "ajay",
                lname: "kumar"
            },
            student: ["kiran", "kalyan", "kailash"]
        }
    }

    render() {
        return <div>
            <h2>iam from Parentclasscomp</h2>
            <hr />

            {this.state.welcomemsg}

            <hr />

            <p>   {this.state.user.fname}</p>
            <p>   {this.state.user.lname}</p>

            <hr />
            {this.state.student.map((user) => {
                return <p>{user}</p>

            })}
            <hr />

            <Childclasscomp />
        </div>
    }
}