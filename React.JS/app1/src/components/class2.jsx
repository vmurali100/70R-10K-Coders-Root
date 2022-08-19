import { Component } from "react";

export class ClassTwo extends Component {
    constructor() {
        super()
        this.state = {

            person: {
                "id":1,
                "email":"LLittle@lacus.com",
                "uname":"EMcintyre",
                "ped":"m7932x2W"
            }

        }
    }

    render() {
        return <div>
            {Object.keys(this.state.person).map((val,i) => {
                return <p key={i}>{val} : {this.state.person[val]}</p>
            }
            )}
            <hr />
        </div>
    }
}