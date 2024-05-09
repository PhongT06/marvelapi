import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './App.css'

/////////// I can't seem to get the onclick to pull up the details for the characters///////////////////

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    console.log(character);
  };

  return (
    <div className='app-container'>
      <CharacterList onCharacterClick={handleCharacterClick} />
      <CharacterDetail selectedCharacter={selectedCharacter} />
    </div>
  );
};


export default App;
