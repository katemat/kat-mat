import React from 'react'
import SocialLinks from '../constants/socialLinks'

function Footer() {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          &copy; Developed by <span>Katerina Matveeva </span>
          {new Date().getFullYear()}
        </h4>
      </div>
    </footer>
  )
}

export default Footer
