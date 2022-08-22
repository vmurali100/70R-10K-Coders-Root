import UserClass from "../../../app2/src/Components/UserClassComp";
import Prasanna from "./PrasannaClassComp";

export  default function Keerthi(){// one  component can return one html
    return<div> 
        <h2>Hello from Keerthi Component</h2>
        
        {/* <Prasanna/> */}
        <UserClass/>
        
    </div>
}