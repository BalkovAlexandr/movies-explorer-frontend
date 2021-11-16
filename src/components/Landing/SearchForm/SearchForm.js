import React, { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ handleFormSubmit }) {
  const [value, setValue] = useState('');
  const [checkbox, setCheckbox] = useState('');

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleFormSubmit(value);
  };
  const checkboxChange = (evt) => {
    setCheckbox(evt.target.value);
  };
  return (
    <section className='search-form root__content'>
      <form className='search-form__form' onSubmit={handleSubmit}>
        <div className='search-form__title'>
          <input
            className='search-form__input'
            type='text'
            placeholder='Фильм'
            onChange={handleChange}
            value={value}
            required
          />
          <button className='search-form__button' type='submit'>
           Найти
          </button>
        </div>

        <FilterCheckbox
          handleChange={checkboxChange}
          value={checkbox}
        />
      </form>
    </section>
  );
}

export default SearchForm;
