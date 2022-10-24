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

// icons
import atom from './images/icons/atom.png'
import htmlCoding from './images/icons/html-coding.png'
import javaScript from './images/icons/java-script.png'
import css from './images/icons/css-3.png'

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
    <StateProvider>
      <MainMenu />
      <AboutMe />
      <Skillset />
      <Projects />
      <Contact />
      <div class="boxes">
        <ul>
          <li><img src={atom}></img></li>
          <li><img src={css}></img></li>
          <li><img src={htmlCoding}></img></li>
          <li><img src={atom}></img></li>
          <li><img src={htmlCoding}></img></li>
          <li><img src={javaScript}></img></li>
        </ul>
      </div>
    </StateProvider>
  );
}

export default App;
