import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header';
import { Slider } from './component/Slider';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Students } from './component/Students';
import { Subject } from './component/Subject';
import { Teachers } from './component/Teachers';
import { Studentdetails } from './component/Studentdetails';
function App() {
  return (
    <div className="App">
     
      {/* <Slider/> */}
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Students/>}/>
        <Route path="/:id" element={<Studentdetails/>}/>
        <Route path="/subject" element={<Subject/>}/>
        <Route path="/teachers" element={<Teachers/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
