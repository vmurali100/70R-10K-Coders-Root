import { Component } from "react";
import { Ajax } from "./Ajax";
import { Egg } from "./Egg";
import { Five } from "./Five";
import { Fun } from "./Fun";
import { Kittu } from "./Kittu";
import { Madhavclass1 } from "./Madhavclass1";
import { Madhavclass2 } from "./Madhavclass2";
import { Madhavclass3 } from "./Madhavclass3";
import { Madhavclass4 } from "./Madhavclass4";
import { Zakclass } from "./Zakclass";

export class Madhavclass extends Component{
    render(){
        return <div>
            <h2>hi from Madhavclass</h2>
            <Madhavclass1/>
            <Madhavclass2/>
            <Madhavclass3/>
            <Madhavclass4/>
            <Kittu/>
            <Ajax/>
            <Fun/>
            <Egg/>
            <Five/>
            <Zakclass/>
        </div>
    }
   
}