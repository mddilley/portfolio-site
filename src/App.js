import React from 'react';
import './App.css';
import Home from './Components/Home'
import TopBar from './Components/TopBar'
import Projects from './Components/Projects'

function App() {
  return (
    <div className="table">
      <div className="tablecell">
        <div className="wrapper">
          <TopBar />
          <Home />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
