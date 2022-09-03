import logo from './logo.svg';
import './App.css';
import { CartsTable } from './Components/CartsTable';
import { CreateCart } from './Components/CreateCart';

function App() {
    return ( 
        <div className='App'> 
{/* <CartsTable/> */}
<CreateCart/>
        </div>
    );
}
export default App;