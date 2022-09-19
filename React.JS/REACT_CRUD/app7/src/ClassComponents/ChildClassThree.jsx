import { Component } from "react";

export class ChildClassCompThree extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <h2>Hello from Child class component two</h2>
            <button onClick={this.props.changeName}>Change Name</button>
            <p>Name : {this.props.name}</p>
            <hr/>
            
            <button onClick={this.props.changeDetails}>Change emp Details</button>
            {Object.keys(this.props.details).map((val,i)=>{
                return <p key={i}>{val} : {this.props.details[val]}</p>
            })}
            <hr/>

            <button onClick={this.props.changeCur_location}>Change cur location</button>
            <ul>
                {this.props.cur_location.map((stu,i)=>{
                    return <li key={i}>{stu}</li>
                })}
            </ul>

            <hr />


        </div>
    }
}