import React from 'react';
// import poster from '../../../images/poster.png';
// import poster1 from '../../../images/poster1.png';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ list, savedMoviesPage }) {
 

  return (
    <section className='root__section moviesCardList'>
      <div className='root__content cardList'>
        <ul className='movies-list__box'>
          {list.map((item) => (
            <MoviesCard
              key={item.movieId}
              card={item}
              savedPage={savedMoviesPage}
            />)
          )}
        </ul>
      </div>
    </section>
  );
}

export default MoviesCardList;
