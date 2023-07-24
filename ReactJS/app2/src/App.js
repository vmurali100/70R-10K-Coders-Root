import logo from './logo.svg';
import './App.css';
import { User } from './Components/User';
import UserClass from './Components/UserClass';
import { UsersTable } from './Components/UsersTable';
import { CreateUser } from './Components/CreateUser';

function App() {
  return (
    <div className="App">
      {/* <User/> */}
      {/* <UserClass/> */}
      {/* <UsersTable/> */}
      <CreateUser/>
    </div>
  );
}

export default App;
