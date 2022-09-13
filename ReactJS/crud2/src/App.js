import logo from './logo.svg';
import './App.css';
import { UsersTable } from './Components/UsersTable';
import { CreateUser } from './Components/CreateUser';
import { UserTable2 } from './Components/UserTable2';

function App() {
  return (
    <div className="App">
      {/* <CreateUser/>  */}
     {/* <UsersTable/> */}
     <UserTable2/>
    </div>
  );
}

export default App;
