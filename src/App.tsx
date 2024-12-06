import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import FeaturedProjects from './components/home/FeaturedProjects';
import About from './components/about/About';
import Team from './components/team/Team';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;