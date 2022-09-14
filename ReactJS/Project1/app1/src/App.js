import './App.css';
import { Header } from './Components/Header';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Slider } from './Components/Slider';
import { Students } from './Components/Students';
import { Subjects } from './Components/Subjects';
import { Teachers } from './Components/Teachers';
import { StudentDetails } from './Components/StudentDetails';
import { SubjectDetails } from './Components/SubjectDetails';


function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Header/>
        <Routes>

        <Route path="/" element={<Students/>} />
        <Route path="/:id" element={<StudentDetails/>} />
        <Route path="/Subjects" element={<Subjects/>} />
        <Route path="/Subjects/:id" element={<SubjectDetails/>} />
        <Route path="/Teachers" element={<Teachers/>} />
        <Route path="/Slider" element={<Slider />} />

        
        </Routes>

      </BrowserRouter>
      </div>
  );
}

export default App;
