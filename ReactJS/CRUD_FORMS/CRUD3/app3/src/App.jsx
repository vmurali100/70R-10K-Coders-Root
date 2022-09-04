import logo from './logo.svg';
import './App.css';
import { TodosTable } from './Components/TodosTable';
import { CreateTodos } from './Components/CreateTodos';

function App() {
  return (
    <div className="App">
      {/* <TodosTable/> */}
      <CreateTodos/>
    </div>
  );
}

export default App;
