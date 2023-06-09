import React from 'react';
import CharacterCard from './components/CharacterCard/CharacterCard';
import img from './assets/img/people/malala.png';

const App: React.FC = () => {
  const props = {
    name: 'Malala Yousafzai',
    img,
    votes: {
      positive: 100,
      negative: 80,
    },
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus. Eu velit…',
  };

  return (
    <div className="app">
      <h1>Rule of Thumbs!</h1>
      <CharacterCard {...props} />
    </div>
  );
};

export default App;
