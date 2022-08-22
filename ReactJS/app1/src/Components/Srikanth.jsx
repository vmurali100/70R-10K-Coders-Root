import Chokkalla from "./Chokkalla";
import { SrikanthClass } from "./SrikanthClassComp";
import StudentClassComp from "./StudentClassComp";
import { User } from "./UserClass";


export function Srikanth(){
    return <div>
        <h2>Hello From ReactJs Intelligence</h2>
        <SrikanthClass/>
        <StudentClassComp/>
        <User/>
    </div>
}