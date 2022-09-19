import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AddUser } from "./Components/AddUser";
import { DeleteUser } from "./Components/DeleteUser";
import { EditUser } from "./Components/EditUser";
import { Header } from "./Components/Header";
import { User } from "./Components/User";
import { UserDetails } from "./Components/UserDetails";

function App() {
  return (
    <div className="App">
    

      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/User" element={<User />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/EditUser/:id" element={<EditUser/>} />
          <Route path="/DeleteUser/:id" element={<DeleteUser/>} />
          <Route path="/UserDetails/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
