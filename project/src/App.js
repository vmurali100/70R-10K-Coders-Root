import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Slider } from "./Components/Slider";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Students } from "./Components/Students";
import { Subjects } from "./Components/Subjects";
import { Teachers } from "./Components/Teachers";
import { TeachersDetails } from "./Components/TeachersDetails";
import { StudentDetails } from "./Components/StudentDetails";
import { CreateStudent } from "./Components/CreateStudent";
// import { EditStudents } from "./Components/EditStudents";
import { DeleteStudent } from "./Components/DeleteStudent";
function App() {
  return (
    <div className="App">

      {/* <Slider/> */}
      <BrowserRouter>
      <Header />

        <Routes>
        <Route path="/" element={<Students/>} />
        <Route path="/createStudent" element={<CreateStudent/>} />
        {/* <Route path="/editStudent/:id" element={<EditStudents/>} /> */}
        <Route path="/deleteStudent/:id" element={<DeleteStudent/>} />
        <Route path="/:id" element={<StudentDetails/>} />
        <Route path="/subjects" element={<Subjects/>} />
        <Route path="/teachers" element={<Teachers/>} />
        <Route path="/teachers/:id" element={<TeachersDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;