import { Component } from "react";

export class ObjectClass extends Component {
    constructor() {
        super()
        this.state = {
            persondetails: {
                "id": 1129,
                "email": "ABranscombe@pretium.net",
                "username": "AHatter",
                "password": "u8Lf8"
            }
        }
    }
    render() {
        return <div>
            {Object.keys(this.state.persondetails).map((val, i) => {
                return <p key={i}>{val}:-{this.state.persondetails[val]}</p>
            })}
        </div>
    }
}
