import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import Verify from './components/Verify';
import ListOfExams from './components/ListOfExams';
import ListFreeExams from './components/ListFreeExams';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/list" element={<ListOfExams/>}/>
        <Route path="/listfreeexams" element={<ListFreeExams/>}/>
     </Routes>
    </div>
  );
}

export default App;
