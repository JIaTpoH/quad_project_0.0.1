import React from 'react';
import { createRoot } from 'react-dom/client';
import {HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles/index.css';

import App from './components/App/App';

import { store } from './features/store';

createRoot(document.getElementById("root")).render(

  
  <React.StrictMode>
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  </React.StrictMode>
   );