import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/includes/Header';
import Footer from './components/includes/Footer';
import AppRouter from './routes/AppRouter';
import './app.css';

function App() {
  return (
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
