import React from 'react'
import Project from './Project'
import projectData from '../Data/projectData'

function Projects() {
  return <div className="bottom">
          {projectData.map((project, i) => <Project key={i} name={project.name} img={project.img} description={project.description} />)}
         </div>
}

export default Projects;
