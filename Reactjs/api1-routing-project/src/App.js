import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import {BrowserRouter,Routes,Route}   from 'react-router-dom';
import { CreateStudent } from './components/CreateStudent';
import { Subjects } from './components/Subjects';
import { Students } from './components/Students';
import { Teachers } from './components/Teachers';
import { EditStudent } from './components/EditStudent';
import { DeleteStudent } from './components/DeleteStudent';
import { StudentDetails } from './components/StudentDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Students/>}/>
      <Route path="/:id" element={<StudentDetails/>}/>
      <Route path="/createStudent" element={<CreateStudent/>}/>
      <Route path="/editStudent/:id" element={<EditStudent/>}/>
      <Route path="/deleteStudent/:id" element={<DeleteStudent/>}/>
      <Route path="/subjects" element={<Subjects/>}/>
      <Route path="/teachers" element={<Teachers/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
