import React, { useState, useEffect } from 'react';
// import CharacterLists from './CharacterLists';
import axios from 'axios';
import md5 from 'md5';


const CharacterDetail = ({ selectedCharacterId }) => {
    const [characterDetail, setCharacterDetail] = useState(null);
    const publicKey = '4dc83eb6b35262751175878f67881808';
    const privateKey = 'e0025edb59b4d2651494ba5334ec6b113eed2a68';
    // const hash = '83d24d30c960801c3dee102cb681d2f7';

    useEffect(() => {
        const fetchCharacterDetail = async () => {
          try {
            const ts = Math.floor(Date.now() / 1000);
            const hash = md5(ts + privateKey + publicKey);
            const response = await axios.get(
              `https://gateway.marvel.com/v1/public/characters/${selectedCharacterId}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=50`
            );
            setCharacterDetail(response.data.data.results[0]);
          } catch (error) {
            console.error('Error fetching character detail:', error);
          }
        };
    
        if (selectedCharacterId) {
          fetchCharacterDetail();
        }
      }, [selectedCharacterId, publicKey, privateKey]);
    
      if (!characterDetail) {
        return <div>Click on a character to view details</div>;
      }
    
      return (
        <div className='app-container'>
          <h2>{characterDetail.name}</h2>
          <div>
            <img
              src={`${characterDetail.thumbnail.path}/portrait_uncanny.${characterDetail.thumbnail.extension}`}
              alt={characterDetail.name}
            />
            <p>{characterDetail.description}</p>
            <h3>Associated Comics:</h3>
            <ul>
              {characterDetail.comics.items.map((comic, index) => (
                <li key={index}>{comic.name}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    };
    
    export default CharacterDetail;


