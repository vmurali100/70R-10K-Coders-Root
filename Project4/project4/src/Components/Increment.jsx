import React from "react"
export class Increment extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count:0
        }
    }
    Incrementclick=()=>{
        this.setState({count:this.state.count +1})
    }
    render(){
        const {count}=this.state
        return <div>
<button onMouseEnter={this.Incrementclick}>incremented {count}</button>
        </div>
    }
}