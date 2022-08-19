import { Component } from "react";

export class ClassTwo extends Component {
    constructor() {
        super()
        this.state = {
            todos : {
            "id": 5,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        }
    }
}

    render(){
        return <div>
            {Object.keys(this.state.todos).map((val,i)=>{
                return <p key={i}>{val} : {this.state.todos[val]}</p>
            })}
            <hr />
        </div>
    }

}