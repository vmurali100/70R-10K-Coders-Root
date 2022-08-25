import { Component } from "react";

export class Childram extends Component {

    constructor() {
        super()
    }
    render() {
        return <div>
            <p>{this.props.rani}</p>


            <hr />

            {Object.keys(this.props.raju).map((val, i) => {
                return <p keys={i}>{this.props.raju[val]}</p>
            })}

            <hr />

            {this.props.ramu.map((val, i) => {
                return <p key={i}>{val}</p>
            })}
        </div>
    }
}