import React from 'react'
import { FaGithub, FaShareSquare } from 'react-icons/fa'
import '../css/Project.css'

function Project({
  description,
  title,
  github,
  stack,
  url,
  image,
  password,
  username,
}) {
  return (
    <div className="ProjectsList-project-container">
      <h3>{title}</h3>

      <div
        className="ProjectsList-project-box"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="project-overlay">
          <div className="project-animation">
            <p className="project-desc">{description}</p>
            {password ? (
              <p className="project-credentials">
                username/email: <strong>{username}</strong>
                <br></br>password: {password}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="project-stack">
        {stack.map((item) => {
          return <span>{item}</span>
        })}
      </div>
      <div className="project-links">
        <a href={github} target="blank">
          <FaGithub className="project-icon" />
        </a>
        <a href={url} target="blank">
          <FaShareSquare className="project-icon" />
        </a>
      </div>
    </div>
  )
}

export default Project
