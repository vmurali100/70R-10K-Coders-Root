import { Component } from "react";

export class ClassFour extends Component{
    constructor(){
        super()
        this.state = {
            Book : {
                "Name" : "Atomic Habits",
                "Author" : "James Clear",
                "price" : 450
            }
        }
    }

    render(){
        return <div>
            {Object.keys(this.state.Book).map((val,i)=>{
                return <p key={i}>{val} : {this.state.Book[val]}</p>
            })}
            <hr />
        </div>
    }
}