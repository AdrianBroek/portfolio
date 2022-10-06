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
    </StateProvider>
  );
}

export default App;
