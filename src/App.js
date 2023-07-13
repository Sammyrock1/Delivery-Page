import './App.css';
import LogIn from './component/Logins/LogIn';
import Homepage from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() { 
  return(
    <div>
       <Router>
       <Routes>
        <Route path='/home' element={<Homepage/>} />
        <Route path='/' element={<LogIn />} />
       </Routes>
    </Router>
    </div>
  )
}

export default App;
