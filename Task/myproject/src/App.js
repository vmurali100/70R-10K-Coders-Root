import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { Main } from "./Components/Main";
import { Navbar } from "./Components/Navbar";
import { Verifyemail } from "./Components/Verifyemail";
import { GetFreeexamlist } from "./Components/GetFreeexamlist";
import { GetExam } from "./Components/GetExam";
import { Search } from "./Components/Search";
import { Home } from "./Components/Home";
import { Finishexam } from "./Components/Finishexam";
function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/verifyemail" element={<Verifyemail />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/GetFreeexamlist" element={<GetFreeexamlist />}></Route>
        <Route path="/GetExam" element={<GetExam />}></Route>
        <Route path="/Search" element={<Search />}></Route>
        <Route path="/Finishexam" element={<Finishexam />}></Route>
      </Routes>
    </div>
  );
}

export default App;
