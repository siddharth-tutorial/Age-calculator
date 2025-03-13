import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Home';
import Agecalculator from './Agecalculator';
import Emicalculator from './Emicalculator';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agecalculator' element={<Agecalculator/>}/>
        <Route path='/emicalculator' element={<Emicalculator/>}/>
      </Routes>
    </div>
  );
}

export default App;
