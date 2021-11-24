import React from 'react';
import tracery from '../../../images/tracery.svg';
import './Promo.css';

function Promo() {
  return (
    <section className='promo  root__section'>
      <div className='promo__main root__content'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <img className='promo__tracery' src={tracery} alt='Узор' />
      </div>
    </section>
  );
}

export default Promo;