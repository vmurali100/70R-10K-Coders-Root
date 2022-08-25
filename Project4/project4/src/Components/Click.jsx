
import React from "react"
export class Click extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count:0
        }
    }
    Updateclick=()=>{
        this.setState({count:this.state.count +1})
    }
    render(){
        const {count}=this.state
        return <div>
<button onClick={this.Updateclick}>clicked {count} time</button>
        </div>
    }
}