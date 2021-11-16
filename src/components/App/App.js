import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';
import Register from '../User/Register/Register';
import Login from '../User/Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../User/Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

import { films } from '../../utils/films';

function App() {
  function onRegister(name, password, email) {
  }
  function handleSignin(email) {
  }
  function onLogin(password, email) {
  }

  function handleFormSubmit(evt) {
  }

  return (
    <div className='App'>
      <div className='page'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<Register onRegister={onRegister} isClearInput={true} />} /> 
          <Route path='/signin' element={<Login handleSignin={handleSignin} onLogin={onLogin} isClearInput={true} />} />
          <Route path='/movies' element={<Movies handleFormSubmit={handleFormSubmit} list={films}/>} />
          <Route path='/saved-movies' element={<SavedMovies handleFormSubmit={handleFormSubmit} list={films} />} />
          <Route path='/profile' element={<Profile handleFormSubmit={handleFormSubmit} />} />
          <Route path='/not-found' element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
