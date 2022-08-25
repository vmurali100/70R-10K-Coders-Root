import { Component } from "react";

export class Childajayclass extends Component{


    constructor(){
        super()

    }
    render(){
        return <div>
           <button onClick={this.props.handlearun}>changevarun</button>
           <p>changevarun:{this.props.arun}</p>


           <hr />
           {/* <button onClick={this.props.handlevinay}>changevinay</button> */}
           {Object.keys(this.props.vinay).map((val, i) => {
                return <p keys={i}>{this.props.vinay[val]}</p>
            })}

            <hr />
            {/* <button onClick={this.props.handlemurali}>changemurali</button> */}
            {this.props.murali.map((val,i)=>{
                 return <p key={i}>{val}</p>
            })}
        </div>
    }
}