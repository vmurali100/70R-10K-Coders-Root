import logo from './logo.svg';
import './App.css';
import { User } from './Components/User';
import { UserApi } from './Components/UserApi';
import { UserPosts } from './Components/UserPosts';
import { UserApi2 } from './Components/UserApi2';

function App() {
  return (
    <div className="App">
      {/* <User/> */}
      {/* <UserApi/> */}
      {/* <UserPosts/>   */}
      <UserApi2/>
    </div>
  );
}

export default App;
