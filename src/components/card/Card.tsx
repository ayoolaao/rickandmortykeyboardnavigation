import React from 'react';
import './card.scss';

type Props = {
  id: string
  name: string
  status: string
  species: string
  location : object
  image: string
  gender: string
  origin: object
}

const Card: React.FC<any> = ({ character, index }) => {
  const {
    image,
    name,
  } = character;

  return (
    <article className='card' tabIndex={0} data-index={index}>
      <div className='card__avatar'><img src={image} alt={name} /></div>
      <div className='card__summary'>
        <h1 className='card__summary__name'>{ name }</h1>
      </div>
    </article>
  );
};

export default Card;
