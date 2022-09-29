import React, {useContext} from 'react';
// sass
import './styles/app.scss'
// state context
import { StateProvider } from './components/StateContext';
// components
import MainMenu from './components/MainMenu'

function App() {

  return (
    <StateProvider>
      <MainMenu />
    </StateProvider>
  );
}

export default App;
