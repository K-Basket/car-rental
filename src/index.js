import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { Context } from 'redux/Context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/car-rental">
      <Provider store={store}>
        <Context>
          <App />
        </Context>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
