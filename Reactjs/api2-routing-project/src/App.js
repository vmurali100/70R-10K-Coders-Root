import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import {BrowserRouter,Routes,Route}   from 'react-router-dom';
import { Students } from './components/Students';
import { CreateStudent } from './components/CreateStudent';
import { StudentDetails } from './components/StudentDetails';
import { DeleteStudent } from './components/DeleteStudent';
import { EditStudent } from './components/EditStudent';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Students/>}/>
      <Route path="/createStudent" element={<CreateStudent/>}/>
      <Route path="/:id" element={<StudentDetails/>}/>
      <Route path="/deleteStudent/:id" element={<DeleteStudent/>}/>
      
      
      <Route path="/editStudent/:id" element={<EditStudent/>}/>
 
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
