import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Main from './Components/Main';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
    
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>

        
      </Routes>
    </Router>
   
    </>
  );
}

export default App;
