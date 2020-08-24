import React from 'react'
import '../css/Skills.css'
import Spin from 'react-reveal/Spin'

export default function Skills({ skills }) {
  // let data = skillsData;
  return (
    <div className="skills-container">
      {skills.map((skill, idx) => {
        return (
          <div key={idx} className="skill-wrapper">
            {skill.icon}
            <Spin>
              <div className="skill-title">{skill.title}</div>
            </Spin>
          </div>
        )
      })}
    </div>
  )
}
