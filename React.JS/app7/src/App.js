


import { ParentClassCompFive } from './ClassComponents/ParentClassFive';
import { ParentClassCompFour } from './ClassComponents/ParentClassFour';
import { ParentClassCompOne } from './ClassComponents/ParentClassOne';
import { ParentClassCompThree } from './ClassComponents/ParentClassThree';
import { ParentClassCompTwo } from './ClassComponents/ParentClassTwo';
import { ParentFuncFive } from './FunctionalComponents/ParentFunctionFive';
import { ParentFuncFour } from './FunctionalComponents/ParentFunctionFour';
import { ParentFuncOne } from './FunctionalComponents/ParentFunctionOne';
import { ParentFuncThree } from './FunctionalComponents/ParentFunctionThree';
import { ParentFuncTwo } from './FunctionalComponents/ParentFunctionTwo';

function App() {
  return (
    <div className="App">
      <ParentClassCompOne />
      <ParentFuncOne />
      <ParentClassCompTwo />
      <ParentClassCompThree />
      <ParentClassCompFour />
      <ParentClassCompFive />
      <ParentFuncTwo />
      <ParentFuncThree />
      <ParentFuncFour />
      <ParentFuncFive />
    </div>
  );
}

export default App;
