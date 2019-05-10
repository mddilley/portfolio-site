import React from 'react';
import './App.css';
import Home from './Components/Home'
import TopBar from './Components/TopBar'
import Projects from './Components/Projects'

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
