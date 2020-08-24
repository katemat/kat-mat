import React from 'react'
import ContactForm from './ContactForm'
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
      <ContactForm />
    </div>
  )
}

export default ContactPage
