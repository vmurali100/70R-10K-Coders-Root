import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Todos} from './Components/Todos'
import {DeleteTodos} from './Components/DeleteTodos'
import {EditTodos} from './Components/EditTodos'
import {CreateTodos} from './Components/CreateTodos'
import {TodoDetails} from './Components/TodoDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Todos/>}/>
        <Route path='/tododetails/:id' element={<TodoDetails/>}/>
        <Route path='/edittodo/:id' element={<EditTodos/>}/>
        <Route path='/deletetodo/:id' element={<DeleteTodos/>}/>
        <Route path='/createtodo' element={<CreateTodos/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
