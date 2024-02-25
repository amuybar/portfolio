import React from 'react';
import './App.css';
import About from './componets/about/About.js'
import PyPro from './componets/pypro/index.js'
import FltPro from './componets/flpro/index.js';
import RecPro from './componets/rctpro/index.js'
import TopContainer from './componets/topcomp/index.js';
import Contact from './componets/contact/Contact.js';
import Footer from './componets/footer/index.js';
import Skills from './componets/skills/index.js';


const App = () => {
  return (
    <div>
      <TopContainer />
      <About />
      <Skills/>
      <PyPro />
      <FltPro />
      <RecPro />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
