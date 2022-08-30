import logo from './logo.svg';
import './App.css';
import { Form1 } from './Components/Form1';
import FormClass1 from './Components/FormClass1';
import { Form2 } from './Components/Form2';
import FormClass2 from './Components/FormClass2';
import { Form3 } from './Components/Form3';

function App() {
  return (
    <div className="App">
      {/*<Form1/>
      <Form2/>*/}
      <FormClass1/>
      <FormClass2/>
      <Form3/>
    </div>
  );
}

export default App;
