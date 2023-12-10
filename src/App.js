import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginUi from './login.js/index';
import Signup from './signup/index';
import Forgot from './forgot/index'
import Dashboard from './dashboard/dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginUi />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
