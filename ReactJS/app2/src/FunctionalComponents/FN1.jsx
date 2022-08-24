import { Class1 } from "../ClassComponents/Class1";
import { Class2 } from "../ClassComponents/Class2";
import { Class3 } from "../ClassComponents/Class3";
import { Class4 } from "../ClassComponents/Class4";
import { Class5 } from "../ClassComponents/Class5";
import { Function2 } from "./Function2";
import Function4 from "./Function4";
import { Function5 } from "./Function5";

export default function FN1(){
    return <h3>I am the first functional component
        <Function2/>
        <Function4/>
        <Function5/>
        <Class1/>
        <Class2/>
        <Class3/>
        <Class4/>
        <Class5/>
    </h3>
}