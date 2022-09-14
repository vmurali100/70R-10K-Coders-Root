// import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
// import { Slider } from './Components/Slider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Students } from './Components/Students';
import { Subjects } from './Components/Subjects';
import { Teachers } from './Components/Teachers';
import { StudentDetails } from './Components/StudentDetails';
import { CreateStudents } from './Components/CreateStudents';
import { EditStudents } from './Components/EditStudents';
import { DeleteStudents } from './Components/DeleteStudents';

function App() {
  return (
    <div className="App">
      
      {/* <Slider/> */}
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Students/>} />
          <Route path='/createStudents' element={<CreateStudents/>} />
          <Route path='/editStudents/:id' element={<EditStudents/>} />
          <Route path='/deleteStudents/:id' element={<DeleteStudents/>} />
          <Route path='/:id' element={<StudentDetails/>} />

          <Route path='/subjects' element={<Subjects/>} />
          <Route path='/teachers' element={<Teachers/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
