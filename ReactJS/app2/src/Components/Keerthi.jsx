import { KeerthiClass } from "./KeerthiClassComp";
import Nikitha from "./Nikitha";
import { NikithaClass } from "./NikithaClassComp";
import StudentsClass from "./StudentsClassComp";

export  default function Keerthi(){// one  component can return one html
    return<div> 
        <h2>Hello from Keerthi Component</h2>
        {/* <Nikitha/>
        <KeerthiClass/>
        <NikithaClass/> */}
        <StudentsClass/>
    </div>
}