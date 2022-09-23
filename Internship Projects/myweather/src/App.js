import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux"
import Weather from './Components/Weather';
import WeatherStore from "./store/store";
function App() {
  return (
    <Provider store={WeatherStore}>
    <div className="App">
   <Weather/>
    </div>
    </Provider>
  );
}

export default App;
