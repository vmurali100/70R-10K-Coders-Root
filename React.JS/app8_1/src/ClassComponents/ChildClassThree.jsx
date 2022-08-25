import { Component } from "react";

export class ChildClassThree extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <h2> Hello from Child Class Component</h2>
            <hr />
            <button onClick={this.props.changecar}>change Car</button>
            <p>Changed Name is : {this.props.car}</p>
            <hr />

            <button onClick={this.props.changespecifications}>Change car specifications</button>
            {Object.keys(this.props.specifications).map((val,i)=>{
                return <p key={i}>{this.props.specifications[val]}</p>
            })}
            <hr />
            
            <button onClick={this.props.changealternate}>Change Alternate car</button>
            {this.props.alternate.map((val,i)=>{
                return <p key={i}>{val}</p>
            })}
            <hr />
        </div>
    }
}