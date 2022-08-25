import { Component } from "react";

export class ChildClassTwo extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <button onClick={this.props.changeString}>Change String</button>
            <p>{this.props.string}</p>
            <hr />

            <button onClick={this.props.changeObject}>Change Object</button>
            {Object.keys(this.props.object).map((val,i)=>{
                return <p key={i}>{val} : {this.props.object[val]}</p>

            })}
            <hr />

            <button onClick={this.props.changeArray}>Change Array</button>
            {this.props.array.map((val,i)=>{
                return <p key={i}>{val}</p>

            })}
            <hr />
        </div>
    }
}