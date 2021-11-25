import './Entrance.css';
import { Link } from 'react-router-dom';
import Logo from '../../Landing/Logo/Logo';
import React from 'react';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import InfoMessage from '../../InfoMessage/InfoMessage';


function Entrance({
  type,
  linkTo,
  title,
  btnName,
  subtitle,
  linkName,
  onSubmit,
  infoMessage,
 }) {

  const {values, errors, isValid, handleChange} = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    type === 'signup'
      ? onSubmit(values.name, values.email, values.password)
      : onSubmit(values.email, values.password);
  };

  return (
    <section className='auth-form'>
      <div className='auth-form__top'>
        <Logo />
        <h2 className='auth-form__title'>{title}</h2>
      </div>
      <form className='auth-form__form' onSubmit={handleSubmit}>
        {type === 'signup' && (
          <label className='auth-form__label'>
            <p className='auth-form__field-name'>Имя</p>
            <input
              id='name'
              type='text'
              className='auth-form__input'
              name='name'
              minLength='2'
              maxLength='30'
              required
              pattern='^[A-Za-zА-Яа-яЁё /s -]+$'
              value={values.name || ''}
              onChange={handleChange}
            />
            <span id='name-error' className='auth-form__error'>
              {errors.name ? `Поле должно быть заполнено и может содержать только латиницу,
                кириллицу, пробел или дефис` : ''}
            </span>
            </label>
        )}
        <label className='auth-form__label'>
          <p className='auth-form__field-name'>E-mail</p>
          <input
            id='email'
            type='email'
            className='auth-form__input'
            name='email'
            minLength='2'
            maxLength='30'
            required
            value={values.email || ''}
            onChange={handleChange}
          />
          <span id='email-error' className='auth-form__error'>
            {errors.email || ''}
          </span>
        </label>
        <label className='auth-form__label'>
          <p className='auth-form__field-name'>Пароль</p>
          <input
            id='password'
            type='password'
            className='auth-form__input'
            name='password'
            minLength='4'
            maxLength='20'
            required
            value={values.password || ''}
            onChange={handleChange}
          />
          <span id='password-error' className='auth-form__error'>
            {errors.password || ''}
          </span>
        </label>

        <InfoMessage {...infoMessage} />
        <div className='auth-form__bottom'>
          <button
            className='auth-form__submit-btn app__link'
            type='submit'
            disabled={!isValid}
          >
            {btnName}
          </button>
          <p className='auth-form__subtitle'>{subtitle}
            <Link to={linkTo} className='auth-form__link app__link'>{linkName}</Link>
          </p>
        </div>
      </form>
    </section>
  );
};
  
export default Entrance;