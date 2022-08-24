import { Component } from "react";

export class Class4 extends Component{
    constructor(){
        super()
        this.state={
            address4:{}
        }
    }
    
   

    displayAddress=()=>{
        this.setState({address4:{name4:"vennela",city:"hyd",Door:345}})
        
    }

    render(){
        return <div>
            <button onClick={this.displayAddress}>Check Address</button>
            <p>The Address is : <br />
             {this.state.address4.name4} <br />
             {this.state.address4.city} <br />
             {this.state.address4.Door}</p>
        </div>
    }
}
