import React from 'react';
import './common.scss';
import Router from './router/Router';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
