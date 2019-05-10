import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/Home'
import TopBar from './Components/TopBar'
import Projects from './Components/Projects'

function App() {
  return (
    <div className="table">
      <div className="tablecell">
        <div className="wrapper">
          <Router>
            <TopBar />
            <Route exact path="/" component={Home}/>
            <Route exact path="/projects" component={Projects}/>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
