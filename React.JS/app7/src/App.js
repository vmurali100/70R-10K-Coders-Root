import logo from './logo.svg';

import { ParentClassComp } from './Components/parentClass';
import { Message } from './Components/parentFunction';

function App() {
  return (
    <div className="App">
      <ParentClassComp />
      <Message />
    </div>
  );
}

export default App;
