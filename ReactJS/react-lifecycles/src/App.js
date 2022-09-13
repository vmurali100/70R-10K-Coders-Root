import logo from './logo.svg';
import './App.css';
import ClassComp1 from './Components/ClassComponents/ClassComp1';
import ChildClasscomp from './Components/ClassComponents/ChildClasscomp';
import ParentComp from './Components/ClassComponents2/ParentComp';

function App() {
  return (
    <div className="App">
      {/* <ClassComp1/>
      <ChildClasscomp/> */}
      <ParentComp/>
    </div>
  );
}

export default App;
