import React, { useRef } from 'react';
import './card.scss';
import {ACTIVE_CARD_CLASS} from '../../constants';

const Card: React.FC<any> = ({ character, index, onHandleClickCallback }) => {
  const { image, name } = character;
  const cardRef: React.MutableRefObject<any> = useRef();

  const handleOnClick = () => onHandleClickCallback(cardRef, ACTIVE_CARD_CLASS);

  return (
    <article className='card' tabIndex={0} data-index={index} ref={cardRef} onClick={handleOnClick}>
      <div className='card__avatar'><img src={image} alt={name} /></div>
      <div className='card__summary'>
        <h1 className='card__summary__name'>{ name }</h1>
      </div>
    </article>
  );
};

export default Card;
