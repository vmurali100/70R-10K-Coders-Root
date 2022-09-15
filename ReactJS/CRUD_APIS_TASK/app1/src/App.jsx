import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Students } from './Components/Students';
import { StudentDetails } from './Components/StudentDetails';
import { Header } from './Components/Header';
import { CreateStudent } from './Components/CreateStudent';
import { Delete } from './Components/Delete';
import { EditStudent } from './Components/EditStudent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element ={ <Students/>}/>
      <Route path='/createStudent' element ={ <CreateStudent/>}/>
      <Route path='/editStudent/:id' element ={ <EditStudent/>}/>
      <Route path='/deleteStudent/:id' element ={ <Delete/>}/>
      <Route path='/:id' element={<StudentDetails/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
