import { Age } from "./age";
import { ClassOne} from "./class1";
import { ClassTwo } from "./class2";
import { ClassThree } from "./class3";
import { ClassFour } from "./class4";
import { ClassFive } from "./class5";
import { Location } from "./location";
import { Mobile } from "./mobile";
import { Study } from "./study";


export function Prudhvi() {

    return <div>
        <h2>Hi from prudhvi component</h2>
        <Age />
        <Study />
        <Location />
        <Mobile />
        <ClassOne />
        <ClassTwo />
        <ClassThree />
        <ClassFour />
        <ClassFive />

    </div>


}