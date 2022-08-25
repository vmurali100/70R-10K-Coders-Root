


import { ParentClassFive } from './ClassComponents/ParentClassFive';
import { ParentClassFour } from './ClassComponents/ParentClassFour';
import { ParentClassOne } from './ClassComponents/ParentClassOne';
import { ParentClassThree } from './ClassComponents/ParentClassThree';
import { ParentClassTwo } from './ClassComponents/ParentClassTwo';
import { ParentFuncFive } from './FunctionalComponents/ParentFunctionFive';
import { ParentFuncFour } from './FunctionalComponents/ParentFunctionFour';
import { ParentFuncOne } from './FunctionalComponents/ParentFunctionOne';
import { ParentFuncThree } from './FunctionalComponents/ParentFunctionThree';
import { ParentFuncTwo } from './FunctionalComponents/ParentFunctionTwo';

function App() {
  return (
    <div className="App">
    <ParentClassOne />
    <ParentClassTwo />
    <ParentClassThree />
    <ParentClassFour />
    <ParentClassFive />
    <ParentFuncOne />
    <ParentFuncTwo />
    <ParentFuncThree />
    <ParentFuncFour />
    <ParentFuncFive />
    
    </div>
  );
}

export default App;
