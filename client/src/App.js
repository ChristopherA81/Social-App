// import { Router } from "express";
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App () {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile:username" element={<Profile/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
