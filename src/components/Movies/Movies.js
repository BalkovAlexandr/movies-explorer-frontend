import './Movies.css';
import SearchForm from '../Landing/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import React from 'react';
import { filterMovies, filterShortMovies, changeMovies} from '../../utils/utils';
import * as moviesApi from  '../../utils/MoviesApi';


function Movies({ onLikeClick, savedMoviesList, onDeleteClick }) {

  const forCheckbox = localStorage.getItem('shortFilms') === 'on' ? 'on' : 'off';

  const [searchQuery, setSearchQuery] = React.useState('');
  const [shortFilms, setShortFilms] = React.useState(forCheckbox);

  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [allMovies, setAllMovies] = React.useState([]);
  
  const [isNothingFound, setIsNothingFound] = React.useState(false);
  const [isMoviesLoaging, setIsMoviesLoaging] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  function handleSetFilteredMovies (movies, query, checkbox) {
    const moviesList = filterMovies(movies, query);
    setFilteredMovies(checkbox === 'on' ? filterShortMovies(moviesList) : moviesList);
    localStorage.setItem('movies', JSON.stringify(moviesList));
  }

  function handleSearchSubmit(value) {
    setIsMoviesLoaging(true);
    setSearchQuery(value);
    localStorage.setItem('searchQuery', value);
    localStorage.setItem('shortFilms', shortFilms);
    
    if (!allMovies.length) {
      moviesApi.getMovies()
        .then((data) => {
          changeMovies(data);
          setAllMovies(data);
          handleSetFilteredMovies(data, value, shortFilms);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err);
        })
        .finally(() => setIsMoviesLoaging(false))
    } else {
      handleSetFilteredMovies(allMovies, value, shortFilms);
      setIsMoviesLoaging(false);
    }
  }

  function handleShortFilms(e) {
    setShortFilms(e.target.value);
    localStorage.setItem('shortFilms', e.target.value);
	}

  function handleCheckFilteredMovies(arr) {
    arr.length === 0 ? setIsNothingFound(true) : setIsNothingFound(false);
	}

  React.useEffect(() => {
    const arr = JSON.parse(localStorage.getItem('movies'));
    if (arr && !searchQuery) {
      setShortFilms(localStorage.getItem('shortFilms'));
      setFilteredMovies(shortFilms === 'on' ? filterShortMovies(arr) : arr);
      handleCheckFilteredMovies(arr);
    }
  }, [shortFilms, searchQuery])

  React.useEffect(() => {
    if (searchQuery) {
      const arr = filterMovies(allMovies, searchQuery, shortFilms);
      setFilteredMovies(arr);
      handleCheckFilteredMovies(arr);
    }
  }, [searchQuery, shortFilms, allMovies])

  return (
    <section className='movies'>
      <SearchForm
        onSearchClick={handleSearchSubmit}
        onCheckbox={handleShortFilms}
        shortFilms={shortFilms}
      />
      <MoviesCardList
        isLoading={isMoviesLoaging}
        list={filteredMovies}
        isEmptyList={isNothingFound}
        isError={isError}
        onLike={onLikeClick}
        onDelete={onDeleteClick}
        savedMovies={savedMoviesList}
      />
    </section>
  );
}
  
export default Movies;