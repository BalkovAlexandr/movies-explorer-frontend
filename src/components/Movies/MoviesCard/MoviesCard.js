import './MoviesCard.css';
import { getTimeFromMin } from '../../../utils/utils';


function MoviesCard({ card, onLike, onDelete, liked, savedPage }) {

  function handleLikeClick() {
    onLike(card);
  };

  function handleDeleteClick() {
    onDelete(card);
  };

  return (
    <li className='movie'>
      <a className='movie__link' href={card.trailer || card.trailerLink} target='_blank' rel='noreferrer'>
        <img className='movie__image' src={card.image} alt={card.nameRU} />
      </a>
      <div className='movie__info'>
        <div className='movie__header'>
          <h2 className='movie__title'>{card.nameRU}</h2>
          <p className='movie__duration'>{getTimeFromMin(card.duration)}</p>
        </div>
        <button 
          type='button' 
          className={`movie__button
          ${savedPage ? 'movie__button-delete' : 'movie__button-save'}
          ${liked && !savedPage ? 'movie__button-save_active' : ''}`}
           onClick={savedPage || liked ? handleDeleteClick : handleLikeClick}
        />
      </div>
    </li>
  );
};
  
export default MoviesCard;