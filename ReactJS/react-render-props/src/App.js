import logo from './logo.svg';
import './App.css';
import { Click } from './Components/Sample1/Click';
import { Hover } from './Components/Sample1/Hover';
import { Hover2 } from './Components/Sample2/Hover2';
import { Sample1 } from './Components/Sample1/Sample1';
import { Count } from './Components/Sample1/Count';
import { Click2 } from './Components/Sample2/Click2';
import { Count2 } from './Components/Sample2/Count2';
import { SampleClick } from './Components/Sample/SampleClick';
import { SampleHover } from './Components/Sample/SampleHover';
import { Click3 } from './Components/Sample3/Click3';
import { Hover3 } from './Components/Sample3/Hover3';
import { Count4 } from './Components/Sample4/Count4';
import { Click4 } from './Components/Sample4/Click4';
import { Hover4 } from './Components/Sample4/Hover4';
import { Click5 } from './Components/Sample5/Click5';
import { Count5 } from './Components/Sample5/Count5';
import { Hover5 } from './Components/Sample5/Hover5';

function App() {
  const handleMessage =(value)=>{
    return value===true ? "Hello from App function" : "Bye from App function"
  }
  return (
    <div className="App">
      <SampleClick/> <br/>
      <SampleHover/>
      
      <hr/>
      <Count render={(ring,handleRing)=> <Click ring={ring} handleRing={handleRing}/>}/>
      <Count render={(ring,handleRing)=> <Hover ring={ring} handleRing={handleRing}/>}/>
     
      {/* <hr/>
      <Sample1 message={"Hello sample"} meena={handleMessage}/> */}
      <hr/>
    <Count2 render={(count,handleCount)=> <Click2 count={count} handleCount={handleCount} />}/>
    <Count2 render={(count,handleCount)=> <Hover2 count={count} handleCount = {handleCount}/>}/>
    <hr/>
    <Click3/>
    <Hover3/>
    <hr/>
    <Count4 render={(count,handleCount)=> <Click4 count={count} handleCount={handleCount}/>}/>
    <Count4 render={(count,handleCount)=> <Hover4 count={count} handleCount={handleCount}/>}/>
    <hr/>
    <Count5 render={(count,handleCount)=> <Click5 count={count} handleCount={handleCount}/>}/>
    <Count5 render={(count,handleCount)=><Hover5 count={count} handleCount={handleCount}/>}/>
    </div>
  );
}

export default App;
