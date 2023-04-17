import Home from './layout/Home';
import Login from './layout/Login'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Otp from './layout/Otp';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="otp" element={<Otp/>}/>
    </Routes>
  );
}

export default App;
