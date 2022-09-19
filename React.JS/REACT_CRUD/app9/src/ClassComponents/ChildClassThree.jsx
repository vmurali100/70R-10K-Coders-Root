import { Component } from "react";

export class ChildClassThree extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <button onClick={this.props.changeString}>Change Message</button>
            <p> Hospital Name : {this.props.string}</p>
            <hr />

            <button onClick={this.props.changeObject}>Change User</button>
            {Object.keys(this.props.object).map((val,i)=>{
                return <p key={i}>{val} : {this.props.object[val]}</p>
            })}
            <hr />

            <button onClick={this.props.changeArray}>Change Array</button>
            <ul>
                {this.props.array.map((val,i)=>{
                    return <li key={i}>{val}</li>
                })}
            </ul>
            <hr />
        </div>
    }
}