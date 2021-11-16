import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import tracery from '../../../images/tracery.svg';
import './Promo.css';

function Promo() {
  return (
    <section className='promo  root__section'>
      <div className='promo__header root__content'>
        <img className='promo__logo' src={logo} alt='Лого' />
        <div className='promo__auth'>
          <Link to='signup' className='promo__signup'>
            Регистрация
          </Link>
          <Link to='signin' className='promo__signin'>
            Войти
          </Link>
        </div>
      </div>
      <div className='promo__main'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <img className='promo__tracery' src={tracery} alt='Узор' />
      </div>
    </section>
  );
}

export default Promo;
