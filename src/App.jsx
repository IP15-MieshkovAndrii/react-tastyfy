import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import Login from 'src/components/Login/Login';
import Footer from "./components/Footer/footer";
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import axios from 'axios';

function App() {
  const [getMessage, setGetMessage] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(response => {
        console.log("SUCCESS", response);
        setGetMessage(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={questTheme}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
}

export default App;
