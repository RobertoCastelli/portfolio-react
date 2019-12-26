import React from 'react';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Skills from './Skills';
import Blog from './Blog';
import Projects from './Projects';
import Links from './Links';
import Logo from './Logo';
import Carousel from './Carousel';

function App() {
  return (
    <div>
      <Logo />
      <Header />
      <Carousel />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
