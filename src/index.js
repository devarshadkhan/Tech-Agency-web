import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider,createMuiTheme } from '@mui/material';
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
  sm: 576,
  md: 768,
  lg: 1200,
  xl: 1400,
    }
    
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>  
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
