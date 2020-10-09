import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/includes/Header';
import Menubar from './components/includes/Menubar';
import Footer from './components/includes/Footer';
import './app.css';

function App() {
  return (
    <Router>
      <Header />
      <Menubar />
      <Footer />
    </Router>
  );
}

export default App;
