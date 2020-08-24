import React from 'react'
import './css/main.css'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Projects from './components/Projects'
import projects from './constants/ProjectsDetails'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <About title="about me" />
        <Projects projects={projects} title="Recent Projects" showLink />
        <Contact />
      </Layout>
    </div>
  )
}

export default App
