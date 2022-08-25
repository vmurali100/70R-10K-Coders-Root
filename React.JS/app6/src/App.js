import logo from './logo.svg';

// import { ParentClassComp } from './Components/ClassComp';
// import { Message } from './Components/functionParent';
import { ParentClassTwo } from './Components/ParentClassCompTwo';
import { ParentFunctionTwo } from './Components/ParentFuncTwo';

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
