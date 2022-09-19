import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Slider } from './Components/Slider';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Students } from './Components/Students';
import { Teachers } from './Components/Teachers';
import { Marks } from './Components/Marks';
import { StudentDetails } from './Components/StudentDetails';
import { TeacherDetails } from './Components/TeacherDetails';
import { MarkDetails } from './Components/MarkDetails';

function App() {
  return (
    <div className="App">
     
      {/* <Slider/> */}
      
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Slider/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/students/:id' element={<StudentDetails/>}/>
        <Route path='/teachers' element={<Teachers/>}/>
        <Route path='/teachers/:id' element={<TeacherDetails/>}/>
        <Route path='/marks' element={<Marks/>}/>
        <Route path='/marks/:id' element={<MarkDetails/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
