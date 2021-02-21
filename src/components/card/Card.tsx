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
    gender,
    status,
    species,
    location: { name: locationName },
    origin: { name: originName }
  } = character;

  return (
    <article className='card' tabIndex={0} data-index={index}>
      <img className='card__avatar' src={image} alt={name} />
      {/*<div className='card__details'>*/}
      {/*  <div className='card__name-gender'>*/}
      {/*    <h1 className='card__name'>{ name }</h1>*/}
      {/*    <p className='card__gender'>{ gender === 'male' ? '⚦' : '♀' }</p>*/}
      {/*  </div>*/}
      {/*  <div className='card__status'><span className={`card__${status === 'alive' ? 'alive' : 'dead'}`} /><p>{ status } - { species }</p></div>*/}
      {/*  <div>*/}
      {/*    <p>Last known location:</p>*/}
      {/*    <p>{ locationName }</p>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <p>origin: { originName }</p>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </article>
  );
};

export default Card;
