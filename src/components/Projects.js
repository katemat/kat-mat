import React from 'react'
import Project from './Project'
import Title from './Title'

function Projects({ projects, title, showLink }) {
  return (
    <section className="projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, idx) => {
          if (project.showLink) {
            return <Project key={idx} {...project} />
          }
        })}
      </div>

      <a href="#projects" className="btn center-btn">
        more...
      </a>
    </section>
  )
}

export default Projects
