
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  Todos } from './Components/Todos';
import { Header } from './Components/Header';
import { EditTodo } from './Components/EditTodos';
import { DeleteTodo } from './Components/DeleteTodos';
import { TodoDetails } from './Components/TodosDetials';
import { CreateTodo } from './Components/CreateTodo';

function App() {
  return (
    <div className="App">
    

      <BrowserRouter>
      <Header />
         <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/EditTodo/:id" element={<EditTodo />} />
            <Route path="/DeleteTodo/:id" element={<DeleteTodo />} />
            <Route path="/TodoDetails/:id" element={<TodoDetails />} />
            <Route path="/CreateTodo" element={<CreateTodo />} />
         </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
