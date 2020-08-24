import React from 'react'
import '../css/About.css'
import Skills from './Skills'
import Fade from 'react-reveal/Fade'
import skillsData from '../constants/skillsData'
import Title from './Title'
import photo from '../assets/img_3079.JPG'
import Reveal from 'react-reveal/Reveal'

function About({ title }) {
  let skills = skillsData
  return (
    <section id="about" className="about-page">
      <div className="section-center about-center">
        {/* <img src={photo} alt="" className="about-img" /> */}
        <article>
          <Title title={title} />

          {/* <img src="../assets/photo.png" alt="" /> */}
          <Fade right>
            <h3>Learning is my hobby and creating is my passion</h3>
          </Fade>
          <Fade right delay={1000}>
            <li className="about-me">
              I am a creative problem-solver, have a curious mind and treat
              learning as a lifelong journey.
            </li>
          </Fade>
          <Fade right delay={2000}>
            <li className="about-me">
              I see my main mission as a Software Developer to deliver efficient
              solutions to customers. I’m driven to bring a long lasting
              positive impact on people’s lives by the power of programming. I
              enjoy working on projects when challenged and surrounded by a
              passionate team.
            </li>
          </Fade>
          <Fade right delay={3000}>
            <li className="about-me">
              I opened to any exciting opportunities that will give me a chance
              to enchance my skillset, to achieve new goals in my professional
              developement.
            </li>
          </Fade>
          <div className="about__tech-stack">
            <h3>Tech Stack</h3>
            <div className="underline"></div>
            <Skills skills={skills[0]} />
          </div>

          {/* </div> */}
        </article>
      </div>
    </section>
  )
}

export default About
