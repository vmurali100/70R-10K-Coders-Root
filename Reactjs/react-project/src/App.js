import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Slider } from './components/Slider';
import {BrowserRouter,Routes,Route}   from 'react-router-dom'
import {Students} from './components/Students'
import { Subjects } from './components/Subjects';
import { Teachers } from './components/Teachers';
function App() {
  return (
    <div className="App">
      
     {/*<Slider/>*/}
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Students/>}/>
      <Route path="/subjects" element={<Subjects/>}/>
      <Route path="/teachers" element={<Teachers/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
