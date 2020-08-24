import React from 'react'
// import logo from '../assets/favicon-32x32.png'
import { FaAlignRight } from 'react-icons/fa'
import PageLinks from '../constants/links'

function NavBar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src={logo} alt="logo" /> */}
          <h4 className="logo">KM</h4>

          <button className="toggle-btn" type="button" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default NavBar
