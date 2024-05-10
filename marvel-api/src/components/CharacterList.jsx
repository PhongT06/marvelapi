import React, { useState, useEffect } from 'react';
import CharacterDetail from './CharacterDetail';
import axios from 'axios';
import md5 from 'md5';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const CharacterList = ({ onCharacterClick }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const publicKey = '4dc83eb6b35262751175878f67881808';
  const privateKey = 'e0025edb59b4d2651494ba5334ec6b113eed2a68';
  const hash = '83d24d30c960801c3dee102cb681d2f7';

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const ts = Math.floor(Date.now() / 1000);
        const hash = md5(ts + privateKey + publicKey);
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=50`
        );
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, [publicKey, privateKey]);

  const handleCharacterClick = (characterId) => {
    setSelectedCharacterId(characterId);
    onCharacterClick(characterId);
  };

  return (
    <div className='app-container'>
      <NavBar />
      <h1>Marvel Comics Characters</h1>
      <div className="character-list">
        {characters.map((character) => (
          <div
          key={character.id}
          className="character"
          onClick={() => handleCharacterClick(character.id)}
        >
          <Link to={`/characters/${character.id}`}>{character.name}</Link>
            <h3>{character.name}</h3>
            <img
              src={`${character.thumbnail.path}/portrait_medium.${character.thumbnail.extension}`}
              alt={character.name}
            />
          </div>
        ))}
      </div>
      <CharacterDetail selectedCharacterId={selectedCharacterId} />
    </div>
  );
};

export default CharacterList;