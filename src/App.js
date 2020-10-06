import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Login from './views/Login'
import Signup from './views/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
    </div>
  );
}

export default App;
