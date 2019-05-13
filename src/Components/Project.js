import React from 'react'

function Project(props) {
  return <div className="project-container">
          <div className="project-left">
            <a href={props.link}><img className="img-project" src={"/" + props.img} alt="Oculus" /></a>
          </div>
          <div className="project-right">
            <a href={props.link} className="project-link"><h1 className="project-title">{props.name}</h1></a>
            <p>{props.description}</p>
          </div>
         </div>
}

export default Project;
