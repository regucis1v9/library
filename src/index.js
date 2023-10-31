import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import Book from './components/Book';
import Admin from './components/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Book />
    <Admin />
  </React.StrictMode>
);


