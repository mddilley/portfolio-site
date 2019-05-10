import React from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
  return <div className="top-left">
          <Link to="/">Home</Link><br/>
          <Link to="/projects">Projects</Link>
         </div>
}

export default TopBar;
