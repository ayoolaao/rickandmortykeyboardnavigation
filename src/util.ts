import React from 'react';

export const handleKeyBoardNavigation = (event: any, characters: object[], cardsPerRow:number, activeCardClassName: string, loop: boolean) => {
  const charactersCount = characters.length - 1;

  const keyCode = event.keyCode;
  const target = event.target as Element;
  const currentCardIndex = Number(target.getAttribute('data-index'))
  let nextCardIndex;

  switch (keyCode){
    case 37: //ArrowLeft
      nextCardIndex = currentCardIndex - 1
      if(nextCardIndex < 0) nextCardIndex = loop ? charactersCount : 0
      break;
    case 38: //ArrowUp
      nextCardIndex = currentCardIndex - cardsPerRow
      if(nextCardIndex < 0) nextCardIndex = currentCardIndex
      break;
    case 39: //ArrowRight
      nextCardIndex = currentCardIndex + 1
      if(nextCardIndex > charactersCount) nextCardIndex = loop ? 0 : currentCardIndex
      break;
    case 40: //ArrowDown
      nextCardIndex = currentCardIndex + cardsPerRow
      if(nextCardIndex > charactersCount) nextCardIndex = currentCardIndex
      break;
    case 13: //enter
    case 32: //space
      console.log(`%c keyCode: %c ${keyCode}`, 'font-weight: 500', 'color: green; font-weight: 500');
      break;
    default:
      return;
  }

  const currentCard = document.querySelector(`article[data-index="${currentCardIndex}"]`) as HTMLElement;
  const nextCard = document.querySelector(`article[data-index="${nextCardIndex}"]`) as HTMLElement;

  if(currentCard?.classList.contains(activeCardClassName)) currentCard.classList.remove(activeCardClassName)

  nextCard?.focus();
  nextCard?.classList.add(activeCardClassName);
};

export const handleCardClick = (refCard: React.MutableRefObject<any>, activeCardClassName: string) => {
  removeClassFromAll(activeCardClassName)
  refCard.current.classList.add(activeCardClassName);
}

export const removeClassFromAll = (className: string) => {
  const allActiveCards = document.querySelectorAll(`.${className}`);

  allActiveCards.forEach(activeCard => {
    if (activeCard.classList.contains(className)) activeCard.classList.remove(className);
  })
};
