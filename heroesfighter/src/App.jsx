import React from 'react';
import './App.css';
import ArenaFight from './Components/ArenaFight';
import CardChoice from './Components/CardChoice';


function App() {
  return (
    <div className="App">
      <CardChoice />
      <ArenaFight />
    </div>
  );
}

export default App;
