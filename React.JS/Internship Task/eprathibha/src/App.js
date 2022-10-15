import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login';
import {Routes,Route} from 'react-router-dom'
import { Register } from './Components/Register';
import { VerifyEmail } from './Components/VerifyEmail';
import { ExamList } from './Components/ExamList';
import { QuestionsList } from './Components/QuestionsList';
import { End } from './Components/End';
import { AfterLogin } from './Components/AfterLogin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verfiyEmail" element={<VerifyEmail />} />
        <Route path="/Afterlogin" element={<AfterLogin />} />
        <Route path="/Examlist" element={<ExamList />} />
        
        <Route path="/Questionslist" element={<QuestionsList />} />
       
        <Route path="/EndExam" element={<End />} />

      </Routes>
    </div>
  );
}

export default App;
