import React from 'react'
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa'

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: 'https://www.linkedin.com/in/katerina-matveeva/',
  },

  {
    id: 2,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: 'https://github.com/katemat',
  },
  {
    id: 3,
    icon: <FaFilePdf className="social-icon"></FaFilePdf>,
    url:
      'https://drive.google.com/file/d/1jR8gNUcF5TfHOH8KWwM1Lfa5bTLkPnDP/view?usp=sharing',
  },
]
const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" target="blank">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ''}`}>{links}</ul>
  )
}
