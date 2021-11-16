import './Movies.css';
import React from 'react';
import Header from '../Landing/Header/Header';
import SearchForm from '../Landing/SearchForm/SearchForm';
import Footer from '../Landing/Footer/Footer';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import More from './More/More';

function Movies({ handleFormSubmit, list }) {
  return (
    <>
      <Header />
      <SearchForm handleFormSubmit={handleFormSubmit} />
      <MoviesCardList list={list} />
      <More />
      <Footer />
    </>
  );
}

export default Movies;
