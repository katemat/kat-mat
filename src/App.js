import React from 'react'
import NavBar from './components/NavBar'
// import './App.css'
import './css/main.css'
import Layout from './components/Layout'
import Hero from './components/Hero'

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
      </Layout>
    </div>
  )
}

export default App
