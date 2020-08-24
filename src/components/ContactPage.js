import React from 'react'
// import './Contact.css'
import Contact from './Contact'
// import sample2 from './Animation - 4519.mp4'
import LightSpeed from 'react-reveal/LightSpeed'
import Spin from 'react-reveal/Spin'
import Fade from 'react-reveal/Fade'

function ContactPage() {
  return (
    <div id="contact" className="contact-page">
      <div>
        <Fade right>
          <h3 className="contact-title">
            Want to share ideas or has an offer...
          </h3>
        </Fade>
        <Fade right delay={1000}>
          <h3 className="contact-title">Let's get in touch!</h3>
        </Fade>
      </div>
      <Contact />

      {/* <div className="contact__links">
            <Spin>
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/katerina-matveeva/"
                  target="blank"
                  title="linkedin"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </Spin>
            <Spin>
              <div className="github">
                <a
                  href="https://github.com/katemat"
                  target="blank"
                  title="github"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </Spin> */}
      {/* </div> */}
      {/* </div>
      </div> */}
    </div>
  )
}

export default ContactPage
