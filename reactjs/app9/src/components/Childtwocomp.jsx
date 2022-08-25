import { Component } from "react";

export class Childtwoclass extends Component {
    constructor(props) {
        super(props)

        console.log(props)
    }

    render() {
        return <div>
            <button onClick={this.props.changemessage}>changingmessage</button>
            <p>message from parentclass : {this.props.college}</p>


            {Object.keys(this.props.school).map((val, i) => {
                return <p key={i}>{val} : {this.props.school[val]}</p>
            })}


            {this.props.enmy.map((val, i) => {
                return <p key={i}>{val}</p>
            })}


        </div>
    }
}