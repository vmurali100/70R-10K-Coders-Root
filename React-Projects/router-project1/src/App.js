import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import { Home } from "./Components/Home";
import { Header } from "./Components/Header";
import { Slider } from "./Components/Slider";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Students } from "./Components/Students";
import { Subjects } from "./Components/Subjects";
import { Teachers } from "./Components/Teachers";
import { Addstudent } from "./Components/Addstudent";
import { Addsubject } from "./Components/Addsubject";
import { Addteacher } from "./Components/Addteacher";
import { Userdetails } from "./Components/Userdetails";

function App() {
  return (
    <div className="App">

      {/* <Slider/> */}
      <BrowserRouter>
      <Header />

        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Students" element={<Students/>} />
        <Route path="/:id" element={<Userdetails/>} />

        <Route path="/subjects" element={<Subjects/>} />
        <Route path="/teachers" element={<Teachers/>} />
        <Route path="/Addstudent" element={<Addstudent/>} />
        <Route path="/Addsubject" element={<Addsubject/>} />
        <Route path="/Addteacher" element={<Addteacher/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
