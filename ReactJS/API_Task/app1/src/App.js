
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Header } from './Components/Header';
import { Students } from './Components/Students';
import { CreateCart } from './Components/CreateCart';
import { DeleteCart } from './Components/DeleteCart';
import { EditCart } from './Components/EditCart';
import { StudentDetails } from './Components/StudentDetails';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Students/>}/>
        <Route path="/CreateCart" element={<CreateCart/>}/>
        <Route path="/delete/:id" element={<DeleteCart/>}/>
        <Route path="/edit/:id" element={<EditCart/>}/>
        <Route path="/details/:id" element={<StudentDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
