import { ClassOne } from "./class1";
import { ClassTwo } from "./class2";
import { ClassThree } from "./class3";
import { ClassFour } from "./class4";
import { ClassFive } from "./class5";
import { FuncTwo } from "./funcomp2";
import { FuncThree } from "./funcomp3";
import { FuncFour } from "./funcomp4";
import { FuncFive } from "./funcomp5";

export function FuncOne(){
    return <div>
    <h2>Hello From Functional Component One</h2>
    <FuncTwo />
    <FuncThree />
    <FuncFour />
    <FuncFive />
    <ClassOne />
    <ClassTwo />
    <ClassThree />
    <ClassFour />
    <ClassFive />

    </div>
}