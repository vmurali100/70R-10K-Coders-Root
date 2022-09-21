import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Components/Home";
import { Search } from "./Components/Search";
import { Students } from "./Components/Students";
import { Header } from "./Components/Header";
import { Addstudent } from "./Components/Addstudent";
import { Details } from "./Components/Details";
import { Editstudent } from "./Components/Editstudent";
import { Delete } from "./Components/Delete";
import { Description } from "./Components/Description";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Students" element={<Students />} />
         <Route path="/Description" element={<Description/>}/>
          <Route path="/Addstudent" element={<Addstudent />} />
          <Route path="Students/Editstudent/:id" element={<Editstudent />} />
          <Route path="Students/Details/:id" element={<Details />} />
          <Route path="Students/Delete/:id" element={<Delete />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
