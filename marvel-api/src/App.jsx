import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './App.css'
import Comics from './components/Comics';
import Home from './components/Home';
import NotFound from './components/NotFound';


/////////// I can't seem to get the onclick to pull up the details for the characters///////////////////
/////////// The character details page isn't populating when I click on the link //////////////
/////////// Please help with suggestions on how to fix the problem, Thank you!! ////////////////

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    console.log(character);
  };

  return (
    <div className='app-container'>
      <Routes>
        {/* all different pages now instead of inside a component */}
          <Route path='/' element={<Home />} />
          <Route path='/character-list' element={<CharacterList onCharacterClick={handleCharacterClick} />} />
          <Route path='/character-detail/' element={<CharacterDetail selectedCharacter={selectedCharacter} />} />
          <Route path='/comics' element={<Comics />} />
          <Route path='/characters/:characterId' element={<CharacterDetail />} />
         {/* catch all the other paths not associated with a page */}
          <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
  );
};


export default App;
