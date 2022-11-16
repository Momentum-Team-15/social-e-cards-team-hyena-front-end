import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import data from './valentine.json';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App cardData={data.cards}/>
  </React.StrictMode>
);
