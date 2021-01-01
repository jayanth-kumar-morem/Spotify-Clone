import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import {PersistGate, persistGate} from "redux-persist/integration/react"
import {store,persistor} from "./Redux/Store"

ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
  document.getElementById('root')
);