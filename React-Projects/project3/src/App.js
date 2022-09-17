import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Students } from "./Components/Students";
import { View } from "./Components/View";
import { Contact } from "./Components/Contact";
import { Search } from "./Components/Search";
import { AddUser } from "./Components/AddUser";
import { EditUser } from "./Components/EditUser";
import { DeleteUser } from "./Components/DeleteUser";
import { HomePage } from "./Components/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Students" element={<Students />} />
          <Route path="Students/View/:id" element={<View />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="Students/EditUser/:id" element={<EditUser />} />
          <Route path="Students/DeleteUser/:id" element={<DeleteUser />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

