import React from 'react'

function Project(props) {
  return <div className="project-container">
          <div className="project-left">
            <img className="img-project" src={"/" + props.img} alt="Oculus" />
          </div>
          <div className="project-right">
            <h1 className="project-title">{props.name}</h1>
            <p>{props.description}</p>
          </div>
         </div>
}

export default Project;
