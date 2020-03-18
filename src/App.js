import React from 'react';
import logo from './logo.svg';
import './App.css';
import CompteurContextProvider from './Provider/CompteurContextProvider';
import AffichageCompteur from './Components/AffichageCompteur';
import Incrementeur from './Components/Incrementeur';
import Decrementeur from './Components/Decrementeur';

const App = () => {
  return (
    <CompteurContextProvider>
      <AffichageCompteur />
      <Incrementeur />
      <Decrementeur />
    </CompteurContextProvider>
  );
}

export default App;