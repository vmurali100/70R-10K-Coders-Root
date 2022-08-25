import { Component } from "react";

export class Class5 extends Component{
    constructor(props){
        super()
        console.log(props)
    }
    // render(){
    //     return <div>
    //         <p>Hello from child component: <br />
    //         {this.props.person.name.fname}{this.props.person.name.lname} <br />

    //             {this.props.person.age}</p>
    //             <p>Address:{this.props.person.address.AptName}</p>
    //     </div>
// }
    render(){
        return <div>
                <h3>{this.props.Name1}{this.props.Name2}</h3>
                <hr />
            <button onClick={this.props.ChangedName}>changeName</button>
            <h2>{this.props.Name1}{this.props.Name2}</h2>
        </div>
    }
    }
