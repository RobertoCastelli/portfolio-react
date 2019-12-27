import React from 'react';

import About from './About';
import Header from './Header';
import Footer from './Footer';
import Skills from './Skills';
import Blog from './Blog';
import Projects from './Projects';
import Links from './Links';
import Logo from './Logo';


function App() {
  return (
    <div id="container" className="container">
      <Logo />
      <Header />
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
