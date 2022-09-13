// import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Slider } from './Components/Slider';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import { Students } from './Components/Students';
import { Teachers } from './Components/Teachers';
import { Subjects } from './Components/Subjects';


function App() {
  return (
    <div className="App">
   

     {/* <Slider/> */}
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element ={ <Students/>}/>
      <Route path='/subjects' element ={ <Subjects/>}/>
      <Route path='/teachers' element ={ <Teachers/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
