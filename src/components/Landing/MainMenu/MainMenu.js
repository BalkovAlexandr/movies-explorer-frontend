import React from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../../../images/profile.svg';
import './MainMenu.css';

function MainMenu({ isWrapper }) {
  const menuClass = isWrapper ? 'main-menu__wrapper' : 'main-menu';
  return (
    <div className={menuClass}>
      <div className='main-menu__links'>
        {isWrapper && (
          <NavLink to='/' className='main-menu__link' activeclassname='main-menu__link-active'>
            <span className='main-menu__link-underline'>Главная</span>
          </NavLink>
        )}
        <NavLink to='/movies' className='main-menu__link' activeclassname='main-menu__link-active'>
        <span className='main-menu__link-underline'>Фильмы</span>
        </NavLink>
        <NavLink to='/saved-movies' className='main-menu__link' activeclassname='main-menu__link-active'>
        <span className='main-menu__link-underline'>Сохранённые фильмы</span>
        </NavLink>
      </div>
      <NavLink to='/profile' className='main-menu__link' activeclassname='main-menu__link-active'>
        <div className='main-menu__profile'>
          <p className='main-menu__profile-label'>Аккаунт</p>
          <img
            src={profile}
            alt='Profile'
            className='main-menu__profile-img'
          ></img>
        </div>
      </NavLink>
    </div>
  );
}

export default MainMenu;
