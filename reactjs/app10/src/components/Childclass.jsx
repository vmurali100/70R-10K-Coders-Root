import { Component } from "react";

export class Childclasscomp extends Component {
    constructor(props) {
        super()

        console.log(props)
    }

    render() {
        return <div>
            <h3>hloooo....childcomp</h3>

            <hr />
            <button onClick={this.props.changemessage}>changemessage</button>
            <p>message from parentclass : {this.props.msg}</p>

            {Object.keys(this.props.userdetails).map((val, i) => {
                return <p keys={i}>{this.props.userdetails[val]}</p>
            })}
             
             <hr />

            {this.props.allstudents.map((val,i)=>{
                 return <p key={i}>{val}</p>
            })}
        </div>


    }
}