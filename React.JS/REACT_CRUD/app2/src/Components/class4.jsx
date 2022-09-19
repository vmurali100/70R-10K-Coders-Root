import { Component } from "react";

export class ClassFour extends Component {
    constructor() {
        super()
        this.state = {
            comments: {
                "postid": "1",
                "id": 4,
                "name": "Prudhvidhar",
                "email": "rathna.prudhvi@gmail.com",
                "body": "How are you doing today prudhvi"
            }
        }
    }

    render() {
        return <div>
            {Object.keys(this.state.comments).map((val, i) => {
                return <p key={i}>{val} : {this.state.comments[val]}</p>
            })}
            <hr />
        </div>
    }
}