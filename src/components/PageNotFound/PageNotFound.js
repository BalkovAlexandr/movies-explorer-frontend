import React from 'react';
import './PageNotFound.css';

function PageNotFound() {
  function back() {
    window.history.back();
  }
  return (
    <section className='not-found'>
      <div className='not-found__main'>
        <h2 className='not-found__title'>404</h2>
        <p className='not-found__subtitle'>Страница не найдена</p>
      </div>
      <button className='not-found__button app__link' type='button' onClick={back}>
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;