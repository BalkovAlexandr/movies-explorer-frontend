import './SavedMovies.css';
import React from 'react';
import Header from '../Landing/Header/Header';
import SearchForm from '../Landing/SearchForm/SearchForm';
import Footer from '../Landing/Footer/Footer';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies({ handleFormSubmit, list }) {

  const filterList = list.filter((item) => !!item.owner);
  return (
    <>
      <Header />
      <SearchForm handleFormSubmit={handleFormSubmit} />
      <MoviesCardList savedMoviesPage={true} list={filterList} />
      <Footer />
    </>
  );
}

export default SavedMovies;
