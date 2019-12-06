import React from 'react';
import './App.css';
import BasicRouter from './Config/Router/Router'
import { Provider } from 'react-redux'
import Store from './Store'
function App() {
  return (
    <Provider store={Store}>

      <BasicRouter />

    </Provider>
  );
}

export default App;
