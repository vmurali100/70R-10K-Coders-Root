import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Header';
import { User } from './Components/User';
import { CreateUser } from './Components/CreateUser';
import { EditUser } from './Components/EditUser';
import { DeleteUser } from './Components/DeleteUser';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<User/>} />
          <Route path='/createuser' element={<CreateUser/>} />
          <Route path='/editUser/:id' element={<EditUser/>} />
          <Route path='/deleteUser/:id' element={<DeleteUser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
