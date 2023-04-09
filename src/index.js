import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { theme } from './theme';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>
);
