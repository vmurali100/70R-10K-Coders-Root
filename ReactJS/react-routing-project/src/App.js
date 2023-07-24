import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Home } from "./Components/Home";
import { NotFound } from "./Components/NotFound";
import { Contacts } from "./Components/Contacts";
const App = () => {
  return (
    <BrowserRouter>
      <h1>React Router</h1>
    
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
