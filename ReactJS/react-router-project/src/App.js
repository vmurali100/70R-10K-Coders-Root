import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Components/Home";
import { Notfound} from "./Components/Notfound";
import { Contacts } from "./Components/Contacts";
const App = () => {
  return (
    <>
      <h1>React Router</h1>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </nav>

      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="home" element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </>
  );
};

export default App;