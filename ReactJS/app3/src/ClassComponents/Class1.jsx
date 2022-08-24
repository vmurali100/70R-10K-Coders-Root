import { Component } from "react";
import { Class2 } from "./Class2";
import { Class3 } from "./Class3";
import { Class4 } from "./Class4";
import { Class5 } from "./Class5";

export class Class1 extends Component {
    constructor() {
        super()
        this.state = {
            name: "Hello from Class1",
            address: {
                Door: 302,
                Street: "GandhiNagar",
                City: "Hyd"
            },
            Users: ["A", "B", "C"]
        }
    }
    render() {
        return <div>
            <p>Name:{this.state.name}</p>
            <hr />
            <ul> {Object.keys(this.state.address).map((val, i) => {
                return <li key={i}> {val} :{this.state.address[val]} </li>
            })} </ul>
            <hr />
            <ol> Users:

                
                    {this.state.Users.map((val,i)=>{
                       return <li key={i}>
                        {val}
                       </li> 
                    })}

            </ol>
            <Class2/>
            <Class3/>
            <Class4/>
            <Class5/>
        </div>
    }
}