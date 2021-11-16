import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import MainMenu from '../MainMenu/MainMenu';
import Wrapper from '../Wrapper/Wrapper';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClose() {
    setIsOpen(false);
  }
  function handleOpen() {
    setIsOpen(true);
  }

  return (
    <>
      <header className='header root__content'>
        <NavLink to='/'>
          <img src={logo} alt='Логотип' className='header__logo'></img>
        </NavLink>
        <MainMenu isWrapper={false} />
        <button
          type='button'
          onClick={handleOpen}
          className='header__menu-button'
        />
      </header>
      {isOpen && <Wrapper handleClose={handleClose} />}
    </>
  );
}

export default Header;
