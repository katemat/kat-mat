import React from 'react'
import NavBar from './components/NavBar'
// import './App.css'
import './css/main.css'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Projects from './components/Projects'
import projects from './constants/ProjectsDetails'

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Projects projects={projects} title="Sample" showLink />
      </Layout>
    </div>
  )
}

export default App
