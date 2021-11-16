import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ handleChange, value }) {
  return (
    <div className='checkbox'>
      <input
        className='checkbox__input'
        type='checkbox'
        id='check'
        onChange={handleChange}
        value={value}
        required
      ></input>

      <label className='checkbox__btn' htmlFor='check'></label>
      <p className='checkbox__name'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
