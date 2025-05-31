import React, { useState, useEffect } from 'react';
import Loader from './components/Loader'; // Make sure this path is correct
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Particlesbackground from './components/Particlesbackground';
import Skills from './components/Skills';
import ProjectsSection from './components/ProjectSection';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative">
      <Particlesbackground />
      <main className="relative z-10 noto-sans-regular font-mono w-screen h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
