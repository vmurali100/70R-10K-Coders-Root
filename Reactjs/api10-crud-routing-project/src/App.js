import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Header } from './components/Header';
import { Students } from './components/Students';
import { CreateStudent } from './components/CreateStudent';
import { DeleteStudent } from './components/DeleteStudent';
import { EditStudent } from './components/EditStudent';
import { StudentDetails } from './components/StudentDetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Students/>} />
        <Route path="/createstudent" element={<CreateStudent/>}/>
        <Route path="/deletestudent/:id" element={<DeleteStudent/>}/>
        <Route path="/editstudent/:id" element={<EditStudent/>}/>
        <Route path="/:id" element={<StudentDetails/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
