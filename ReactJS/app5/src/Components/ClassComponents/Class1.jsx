import { Component } from "react";
import { Class2 } from "./Class2";
import { Class3 } from "./Class3";
import { Class4 } from "./Class4";

export class Class1 extends Component{
    constructor(){
        super()
        this.state={
            name:"Hello from Class1",
            object:{
                Apt:"Abc",
                address:{
                    Doorno:454,
                    Add:"GandhiNagar",
                    City:"Hyd"
                }
            },
            array:["sam","ram","ben"],    
            
        }
    }
    render(){
        return <div>
            <h2>Name: {this.state.name}</h2>
            <hr />
            {/* <ul>
                <li>{this.state.object.address.doorno}</li>
                <li>{this.state.object.address.add}</li>
                <li>{this.state.object.address.city}</li>
            </ul> */}
            {Object.keys(this.state.object.address).map((val,i) => {
               return <li key={i}>{val} : {this.state.object.address[val]}</li> 
               
               })}
               <hr />
               <ol> Users:

                
                    {this.state.array.map((val,i)=>{
                       return <li key={i}>
                        {val}
                       </li> 
                    })}

            </ol>
            <Class2/>
            <Class3/>
            <Class4/>
        </div>
        
    }
}