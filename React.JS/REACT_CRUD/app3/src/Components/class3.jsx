import { Component } from "react";

export class ClassThree extends Component {
    constructor() {
        super()
        this.state = {
            three: {
                "id": 1,
                "email": "LLittle@lacus.com", 
                "uname": "EMcintyre",
                 "ped": "m7932x2W"

            }
        }
    }

    render() {
        return <div>
            {Object.keys(this.state.three).map((val, i) => {
                return <p key={i}>{val} : {this.state.three[val]}</p>
            })}
            <hr />
        </div>
    }
}