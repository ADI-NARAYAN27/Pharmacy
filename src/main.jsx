import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import { CartProvider } from './hooks/useCart';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              borderRadius: '16px',
              background: '#ffffff',
              color: '#144360',
              border: '1px solid rgba(15, 152, 216, 0.12)',
              boxShadow: '0 18px 45px rgba(20, 67, 96, 0.12)',
            },
          }}
        />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
