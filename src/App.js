import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  var a = 1;

  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
