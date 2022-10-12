import logo from './logo.svg';
import './App.css';
import { UserFn } from './Components/UserFn';
import  HoverCounter from './Components/HoverCounter';
import { HOCcomp } from './Components/HOCcomp';
import ClickCounter from './Components/ClickCounter'
import ClickPrac, { click } from './Components/practice/ClickPrac';
import { Hover } from './Components/Sample1/Hover';
import Click2 from './Components/Sample2/Click2';
import ClickCounter3 from './Components/Sample3/ClickCounter3';


function App() {
  return (
    <div className="App">
     
      {/* <UserFn/>
      <hr/>
      <HoverCounter/> 
      <hr/> */}
     {/* <ClickCounter/> */}
    {/* <Click/>
    <hr/>
    <Hover/> */}
    <hr/>
    {/* <Click2/><hr/> */}
    <ClickPrac/>
    </div>
  );
}

export default App;
