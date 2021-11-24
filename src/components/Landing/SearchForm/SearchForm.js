import './SearchForm.css';
import React from 'react';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';


function SearchForm({ onSearchClick, savedMoviesPage, shortFilms, onCheckbox }) {

  const {values, errors, isValid, setValues, handleChange, setIsValid} = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSearchClick(values.query);
  };

  React.useEffect(() => {
    if (!savedMoviesPage) {
      const input = localStorage.getItem('searchQuery');
      if (input) {
        setValues({query : input});
        setIsValid(true);
      }
    }
  }, [savedMoviesPage, setValues, setIsValid]);


  return (
    <div className='search-form root__content'>
      <form className='search-form__form' onSubmit={handleSubmit}>
        <div className='search-form__title'>
          <input
            type='text'
            placeholder='Фильм'
            className='search-form__input'
            name='query'
            value={values.query || ''}
            onChange={handleChange}
            required
          />
          <span id='email-error' className='search-form__error'>
            {errors.query ? 'Нужно ввести ключевое слово' : ''}
          </span>
          <button
            className='search-form__btn'
            type='submit'
            disabled={!isValid}
          >
            Найти
          </button>
        </div>
        <div className='search-form__filter-box'>
          <p className='search-form__filter-name'>Короткометражки</p>
          <label className={`search-form__filter
            ${shortFilms === 'on' ? 'search-form__filter_active' : null}`
          }>
            <input className='search-form__radio search-form__radio_off'
              type='radio'
              name='shortFilms'
              value='off'
              checked={shortFilms === 'off' ? true : false}
              onChange={onCheckbox}
            />
            <input className='search-form__radio search-form__radio_on'
              type='radio'
              name='shortFilms'
              value='on'
              checked={shortFilms === 'on' ? true : false}
              onChange={onCheckbox}
            />
            <span className='search-form__switch'></span>
          </label>
        </div>
      </form>
    </div>
  );
};
  
export default SearchForm;