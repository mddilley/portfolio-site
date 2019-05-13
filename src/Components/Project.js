import React from 'react'

function Project(props) {
  return <div>
          <div>
            <img className="img-project" src="/oculus.png" alt="Oculus" />
          </div>
          <div>
            <h3>{props.name}</h3>
          </div>
         </div>
}

export default Project;
