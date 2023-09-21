import './App.css';
import RegisterForms from './register.js';
import Forms from './form.js';
import Error from "./error.js";
import Home from "./components/home.js";
import Dashboard from './dashboard';

// import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Loggedin } from './LoginSuccess';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Forms/>}/>
          <Route path='/register' element={<RegisterForms />}/>
          <Route path='/loggedin' element={<Loggedin/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='*' element={< Error/>}/>
          
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
