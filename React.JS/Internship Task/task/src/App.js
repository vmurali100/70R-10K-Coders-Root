import logo from './logo.svg';
import './App.css';
import { Registration } from './Components/Registration';
import { Login } from './Components/Login';
import { Routes,Route } from 'react-router-dom';
import { ExamList } from './Components/ExamList';
import { QuestionsList } from './Components/QuestionsList';
import { VerifyEmail} from './Components/VeriyEmail';

function App() {
 

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/examlist" element={<ExamList />} />
        <Route path="/questionslist" element={<QuestionsList />} />

      </Routes>
    </div>
  );
}

export default App;
