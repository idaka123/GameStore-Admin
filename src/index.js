import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import 'primereact/resources/themes/lara-light-indigo/theme.css';   
import 'primereact/resources/primereact.css';                      
import 'primeicons/primeicons.css';                                
import 'primeflex/primeflex.css';  

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <BrowserRouter> 
            <App />
        </BrowserRouter> 
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

