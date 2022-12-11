import React from 'react';
import './common.scss';
import Router from './router/Router';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
