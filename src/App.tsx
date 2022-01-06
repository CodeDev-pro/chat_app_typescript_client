import React, { useEffect } from 'react';
import './App.css';
import Signup from './components/pages/sign_up/Signup';
import Login from './components/pages/login/Login';
import { connect } from './data/socketIO/ClientSocket';

function App() {
  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
