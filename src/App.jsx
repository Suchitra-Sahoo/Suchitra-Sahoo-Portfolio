import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Particlesbackground from './components/Particlesbackground'
import Skills from './components/Skills'
import ProjectsSection from './components/ProjectSection'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <>
    <div className= ' relative'>
     
      <Particlesbackground/>
    <main className="relative z-10 noto-sans-regular font-mono w-screen h-screen">
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <ProjectsSection/>
    <Experience/>
    <Contact/>
    <Footer/>
      </main>
    </div>
    </>
  )
}

export default App