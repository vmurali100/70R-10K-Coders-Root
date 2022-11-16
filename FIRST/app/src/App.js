import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import Verify from './components/Verify';
import ExamsButton from './components/ExamsButton';
import FreeExams from './components/FreeExams';
import PremiumExams from './components/PremiumExams';
import FreeExamQuestions from './components/FreeExamQuestions';
import Questions from './components/Questions';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/button" element={<ExamsButton/>} />
        <Route path="/listfreeexams" element={<FreeExams/>}/>
        <Route path="/listpremiumexams" element={<PremiumExams/>}/>
        <Route path="/questions/:id" element={<FreeExamQuestions/>}/>
        <Route path="/listquestions" element={<Questions/>}/>
     </Routes>
    </div>
  );
}

export default App;