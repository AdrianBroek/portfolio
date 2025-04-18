import React, {useContext} from 'react';
// sass
import './styles/app.scss'
// state context
import { StateProvider } from './components/StateContext';
// components
import MainMenu from './components/MainMenu'
// pages
import AboutMe from './pages/AboutMe'
import Skillset from './pages/Skillset'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import ContactForm from './components/ContactForm';

// icons
import atom from './images/icons/atom.png'
import htmlCoding from './images/icons/html-coding.png'
import javaScript from './images/icons/java-script.png'
import css from './images/icons/css-3.png'
import Nav from './components/Nav';

// Particles 
import ParticleCanvas from './components/ParticleCanvas';

function App() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    return (
      <StateProvider>
        <ParticleCanvas />
        {/* <Nav /> */}
        <MainMenu />
        <AboutMe />
        <Skillset />
        <Projects />
        {/* <Contact /> */}
        <ContactForm />
      </StateProvider>
    );
}

export default App;
