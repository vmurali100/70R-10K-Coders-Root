import { ClassOne } from "./class1";
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
     </div>
}