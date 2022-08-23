import Prasanna from "./PrasannaClassComp";
import User from "./UserClassComp";

export  default function Keerthi(){// one  component can return one html
    return<div> 
        <h2>Hello from Keerthi Component</h2>
        
        {/* <Prasanna/> */}
        <User/>
        
    </div>
}