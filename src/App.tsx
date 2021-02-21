import React, { useEffect, useState } from 'react';
import './app.scss';
import { useQuery } from '@apollo/client';
import { RICK_AND_MORTY_CHARACTERS } from './queries';
import { ACTIVE_CARD, CARDS_PER_ROW } from './constants';
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';

const App = () => {
  const { data, loading } = useQuery(RICK_AND_MORTY_CHARACTERS);
  const [ characters, setCharacters ] = useState([]);
  const [ startCardIndex ] = useState(0)

  const cardsPerRow = CARDS_PER_ROW;

  const handleKeyBoardNavigation = (event: any) => {
    const charactersCount = characters.length - 1;

    const keyCode = event.keyCode;
    const target = event.target as Element;
    const currentCardIndex = Number(target.getAttribute('data-index'))
    let nextCardIndex;

    switch (keyCode){
      case 37: //ArrowLeft
        nextCardIndex = currentCardIndex - 1
        if(nextCardIndex < 0) nextCardIndex = 0
        break;
      case 38: //ArrowUp
        nextCardIndex = currentCardIndex - cardsPerRow
        if(nextCardIndex < 0) nextCardIndex = currentCardIndex
        break;
      case 39: //ArrowRight
        nextCardIndex = currentCardIndex + 1
        if(nextCardIndex > charactersCount) nextCardIndex = currentCardIndex
        break;
      case 40: //ArrowDown
        nextCardIndex = currentCardIndex + cardsPerRow
        if(nextCardIndex > charactersCount) nextCardIndex = currentCardIndex
        break;
      default:
        return;
    }

    const currentCard = document.querySelector(`article[data-index="${currentCardIndex}"]`) as HTMLElement;
    const nextCard = document.querySelector(`article[data-index="${nextCardIndex}"]`) as HTMLElement;

    if(currentCard?.classList.contains(ACTIVE_CARD)) currentCard.classList.remove(ACTIVE_CARD)

    nextCard?.focus();
    nextCard?.classList.add(ACTIVE_CARD);
  }

  useEffect(() => {
    setCharacters(data?.characters?.results);
  }, [data])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyBoardNavigation)
    if(characters) {
      const initialCard = document.querySelector(`article[data-index="${startCardIndex}"]`) as HTMLElement;
      initialCard?.focus()
      initialCard?.classList.add(ACTIVE_CARD)
    }

    return () => { window.removeEventListener('keydown', handleKeyBoardNavigation) }
  })

  useEffect(() => {
    if (characters) {
      const cardsWrapper = document.querySelector('div.App__grid') as HTMLElement;
      console.log(cardsWrapper);
      cardsWrapper.style.gridTemplateColumns = `repeat(${cardsPerRow}, minmax(160px, 260px))`;
    }
  }, [characters])

  return (
    <div className="App">
      <Navbar />
      { loading && (<div className='App__loading'>Loading ...</div>) }
      <div className="App__grid">
        { characters && characters.map((character: any, index: number) => (<Card key={character.id} character={character} index={index} />)) }
      </div>
    </div>
  );
}

export default App;
