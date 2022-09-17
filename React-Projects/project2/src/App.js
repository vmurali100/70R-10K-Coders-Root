import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Users } from "./Components/Users";
import { Details } from "./Components/Details";
import { Search } from "./Components/Search";
import { AddUser } from "./Components/AddUser";
import { EditUser } from "./Components/EditUser";
import { DeleteUser } from "./Components/DeleteUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Users" element={<Users />} />
          <Route path="Users/Details/:id" element={<Details />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="Users/EditUser/:id" element={<EditUser />} />
          <Route path="Users/DeleteUser/:id" element={<DeleteUser />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
