import React from 'react';
import CharacterCard from './components/CharacterCard/CharacterCard';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Rule of Thumbs!</h1>
      <CharacterCard />
    </div>
  );
};

export default App;
