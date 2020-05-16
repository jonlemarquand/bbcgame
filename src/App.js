import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import Quiz from './components/Quiz/Quiz';
import Sidebar from './components/Sidebar';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="content">
          <Intro />
          <Quiz />
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
