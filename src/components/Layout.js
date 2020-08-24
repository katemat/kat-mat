import React, { useState } from 'react'
import NavBar from './NavBar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Backdrop from './Backdrop/Backdrop'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  const backdropClickHandler = () => {
    setIsOpen(!isOpen)
  }

  let backdrop
  if (isOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }
  return (
    <div>
      <NavBar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {backdrop}
      {children}
      <Footer />
    </div>
  )
}

export default Layout
