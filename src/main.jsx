import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

// import ThemeProvider from './context/ThemeContext';

import './utils/handlers';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </ThemeProvider>
);
