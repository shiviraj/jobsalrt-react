import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/includes/Header.js';
import Menubar from './components/includes/Menubar.js';
import './app.css';

function App() {
  return (
    <Router>
      <Header />
      <Menubar />
    </Router>
  );
}

export default App;
