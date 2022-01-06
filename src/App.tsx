import React, { useEffect } from 'react';
import './App.css';
import Signup from './components/pages/sign_up/Signup';
import { connect } from './data/socketIO/ClientSocket';

function App() {
  useEffect(() => {
    
  }, [])


  return (
    <div className="app">
      <Signup />
    </div>
  );
}

export default App;
