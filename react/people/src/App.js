import React from 'react';

import {Header} from './components/Header';
import MainContain from './components/MainContain';
import {Footer} from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
          <Header />
            <MainContain />
          <Footer />
    </div>

  );
}

export default App;
