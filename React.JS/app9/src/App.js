

import { ParentClassFive } from './ClassComponents/ParentClassFive';
import { ParentClassFour } from './ClassComponents/ParentClassFour';
import { ParentClassOne } from './ClassComponents/ParentClassOne';
import { ParentClassThree } from './ClassComponents/ParentClassThree';
import { ParentClassTwo } from './ClassComponents/ParentClassTwo';
import { ParentFuncFive } from './FunctionalComponents/ParentFuncFive';
import { ParentFuncFour } from './FunctionalComponents/ParentFuncFour';
import { ParentFuncOne } from './FunctionalComponents/ParentFuncOne';
import { ParentFuncThree } from './FunctionalComponents/ParentFuncThree';
import { ParentFuncTwo } from './FunctionalComponents/ParentFuncTwo';


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
