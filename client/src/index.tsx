import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { TransactionProvider } from 'context/TransactionContext';

import './styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <TransactionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionProvider>,
);
