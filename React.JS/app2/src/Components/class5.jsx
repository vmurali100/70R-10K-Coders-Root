import { Component } from "react";

export class ClassFive extends Component {
    constructor() {
        super()
        this.state = {
            posts: {
                "id": 5,
                "title": "nesciunt quas odio",
                "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
            }
        }
    }

    render() {
        return <div>
            {Object.keys(this.state.posts).map((val, i) => {
                return <p key={i}>{val} : {this.state.posts[val]}</p>
            })}
            <hr />
        </div>
    }
}