import React from 'react'
import photo from '../assets/photo.jpg'
import SocialLinks from '../constants/socialLinks'

function Hero() {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          {/* <div className="underline"></div> */}
          <h1>Hi, I'm Katerina </h1>
          <h2 className="hero-subtitle">Full Stack Dev</h2>
          {/* <h2 className="motto">Making great things possible</h2> */}
          <SocialLinks />
        </article>
        <img src={photo} alt="" className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
