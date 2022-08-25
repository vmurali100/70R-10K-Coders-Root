import { ParentClassTwo } from './ClassComponents/ParentClassCompTwo';
import { ParentFunctionTwo } from './FunctionalComponents/ParentFuncTwo';


// import { ParentClassComp } from './Components/ClassComp';
// import { Message } from './Components/functionParent';

function App() {
  return (
    <div className="App">
      {/* <ParentClassComp />
      <Message /> */}
      <ParentClassTwo />
      <ParentFunctionTwo />
      
      
      
    </div>
  );
}

export default App;
