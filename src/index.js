import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import context API
import { ThemeProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    {/* wrapping App.js with ThemeProvider, for full toggle effect */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);