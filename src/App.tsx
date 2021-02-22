import React, { useEffect, useState } from 'react';
import './app.scss';
import { useQuery } from '@apollo/client';
import { RICK_AND_MORTY_CHARACTERS } from './queries';
import { ACTIVE_CARD_CLASS, CARDS_PER_ROW } from './constants';
import { handleKeyBoardNavigation, handleCardClick } from './util';
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';

const App = () => {
  const { data, loading } = useQuery(RICK_AND_MORTY_CHARACTERS);
  const [ characters, setCharacters ] = useState([]);
  const [ startCardIndex ] = useState(0)

  const cardsPerRow = CARDS_PER_ROW;

  const handleKeyDown = (event: any) => handleKeyBoardNavigation(event, characters, cardsPerRow, ACTIVE_CARD_CLASS, true);

  useEffect(() => {
    setCharacters(data?.characters?.results);
  }, [data]);

  useEffect(() => {
    const cardsWrapper = document.querySelector('div.App__grid') as HTMLElement;
    cardsWrapper.style.gridTemplateColumns = `repeat(${cardsPerRow}, minmax(160px, 260px))`;

    if(characters) {
      // window.addEventListener('keydown', (event) => handleKeyBoardNavigation(event, characters, cardsPerRow, ACTIVE_CARD_CLASS))

      const initialCard = document.querySelector(`article[data-index="${startCardIndex}"]`) as HTMLElement;
      initialCard?.focus()
      initialCard?.classList.add(ACTIVE_CARD_CLASS);
    }

    // return () => { window.removeEventListener('keydown', (event) => handleKeyBoardNavigation(event, characters, cardsPerRow, ACTIVE_CARD_CLASS)) }
  }, [characters, cardsPerRow, startCardIndex]);

  return (
    <div className="App" onKeyDown={handleKeyDown}>
      <Navbar />
      { loading && (<div className='App__loading'>Loading ...</div>) }
      <div className="App__grid">
        { characters && characters.map((character: any, index: number) => (<Card key={character.id} character={character} index={index} onHandleClickCallback={handleCardClick} />)) }
      </div>
    </div>
  );
}

export default App;
