
import "./App.css";
import { Header } from "./Components/Header";
import { Slider } from "./Components/Slider";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Students } from "./Components/Students";
import { Subjects } from "./Components/Subjects";
import { Teachers } from "./Components/Teachers";
import { StudentDetails } from "./Components/StudentDetails";
import { SubjectDetails } from "./Components/SubjectDetails";
import { TeacherDetails } from "./Components/TeacherDetails";
function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
      <Header />

        <Routes>

        <Route path="/" element={<Students/>} />
        <Route path="/:id" element={<StudentDetails />} />
        <Route path="/Subjects" element={<Subjects/>} />
        <Route path="/Subjects/:id" element={<SubjectDetails />} />
        <Route path="/Teachers" element={<Teachers/>} />
        <Route path="/Teachers/:id" element={<TeacherDetails />} />
        <Route path="/Slider" element={<Slider />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;