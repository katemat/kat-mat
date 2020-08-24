import React from 'react'
import Project from './Project'
import Title from './Title'

function Projects({ projects, title, showLink }) {
  return (
    <section className="projects" id="projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, idx) => {
          return <Project key={idx} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects
