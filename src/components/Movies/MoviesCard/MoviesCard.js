import './MoviesCard.css';

function MoviesCard({ card, savedPage }) {

  function getTimeFromMin(mins) {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    return `${hours}ч${minutes}м`;
  };

  return (
    <li className='movie'>
      <img className='movie__image' src={card.image} alt={card.nameRU} />
      <div className='movie__info'>
        <div className='movie__header'>
          <h2 className='movie__title'>{card.nameRU}</h2>
          <p className='movie__duration'>{getTimeFromMin(card.duration)}</p>
        </div>
        <button type='button' className={`movie__button
           ${savedPage ? 'movie__button-delete' : 'movie__button-save'}
           ${card.owner === 1 && !savedPage ? 'movie__button-save_active' : null}`} />
      </div>
    </li>
  )
}

export default MoviesCard;