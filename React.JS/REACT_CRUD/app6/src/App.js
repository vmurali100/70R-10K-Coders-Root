import { ParentClassFive } from './ClassComponents/ParentClassCompFive';
import { ParentClassFour } from './ClassComponents/ParentClassCompFour';
import { ParentClassComp } from './ClassComponents/ParentClassCompOne';
import { ParentClassThree } from './ClassComponents/ParentClassCompThree';
import { ParentClassTwo } from './ClassComponents/ParentClassCompTwo';
import { ParentFuncFive } from './FunctionalComponents/ParentFuncFive';
import { ParentFuncFour } from './FunctionalComponents/ParentFuncFour';
import { ParentFuncThree } from './FunctionalComponents/ParentFuncThree';

import { ParentFunctionTwo } from './FunctionalComponents/ParentFuncTwo';



function App() {
  return (
    <div className="App">
       <ParentClassComp />
       <ParentClassTwo />
       <ParentFunctionTwo /> 
       <ParentClassThree />
       <ParentFuncThree />
       <ParentClassFour />
       <ParentClassFive />
       <ParentFuncFour />
       <ParentFuncFive />
      
      
      
    </div>
  );
}

export default App;
