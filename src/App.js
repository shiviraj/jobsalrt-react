import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/includes/Header';
import Footer from './components/includes/Footer';
import AppRouter from './routes/AppRouter';
import './app.css';
import SearchContext from './context/searchContext';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';

function App() {
  const [value, setValue] = useState('');

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SearchContext.Provider value={{ value, setValue }}>
          <Header />
          <AppRouter />
        </SearchContext.Provider>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
