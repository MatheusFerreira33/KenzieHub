import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Providers } from './providers/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
        <GlobalStyle />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
)
