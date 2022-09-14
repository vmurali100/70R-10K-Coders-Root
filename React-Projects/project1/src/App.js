import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Components/Home";

import { Students } from "./Components/Students";
import { Header } from "./Components/Header";
import { Addstudent } from "./Components/Addstudent";
import { Editstudent } from "./Components/Editstudent";
import { Delete } from "./Components/Delete";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
        
          <Route path="/Students" element={<Students />} />
         
          <Route path="/Addstudent" element={<Addstudent />} />
          <Route path="Students/Editstudent/:id" element={<Editstudent />} />
          <Route path="Students/Delete/:id" element={<Delete />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
