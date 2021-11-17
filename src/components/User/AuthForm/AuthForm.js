import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';
import logo from '../../../images/logo.svg';

function AuthForm(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(name, password, email);
  }
  function handlerOnChangeName(evt) {
    setName(evt.target.value);
  }
  function handlerOnChangeEmail(evt) {
    setEmail(evt.target.value);
  }
  function handlerOnChangePassword(evt) {
    setPassword(evt.target.value);
  }
  React.useEffect(() => {
    if (props.isClearInput) {
      setName('');
      setEmail('');
      setPassword('');
    }
  }, [props.isClearInput]);

  const underButtonText = props.needUnderButton ? props.children : '';

  return (
    <section className='auth-form'>
      <div className='auth-form__top'>
        <Link to='/'>
          <img className='auth-form__logo' src={logo} alt='Логотип'></img>
        </Link>
        <h2 className='auth-form__title'>{props.title}</h2>
      </div>
      <form name='login' className='auth-form__form' noValidate>
        {props.isRegister && (
          <label className='auth-form_field'>
            <p className='auth-form__field-name'>Имя</p>
            <input
              required
              placeholder='Имя'
              className='auth-form__input auth-form__input_type_name'
              type='text'
              name='name'
              id='name-input'
              autoComplete='username'
              minLength='2'
              maxLength='40'
              value={name || ''}
              onChange={handlerOnChangeName}
            />
            <span
              className='auth-form__input-error'
              id='name-input-error'
            ></span>
          </label>
        )}
        <label className='auth-form__field'>
          <p className='auth-form__field-name'>E-mail</p>
          <input
            required
            placeholder='Email'
            className='auth-form__input auth-form__input_type_email'
            type='text'
            name='email'
            id='email-input'
            autoComplete='username'
            minLength='2'
            maxLength='40'
            value={email || ''}
            onChange={handlerOnChangeEmail}
          />
          <span className='auth-form__input-error' id='name-input-error'></span>
        </label>
        <label className='auth-form__field'>
          <p className='auth-form__field-name'>Пароль</p>
          <input
            required
            placeholder='Пароль'
            className='auth-form__input auth-form__input_type_password'
            type='password'
            name='password'
            id='password-input'
            autoComplete='current-password'
            minLength='2'
            maxLength='40'
            value={password || ''}
            onChange={handlerOnChangePassword}
          />
          <span
            className='auth-form__input-error'
            id='password-input-error'
          ></span>
        </label>
      </form>
      <div className='auth-form__bottom'>
        {props.button && (
          <button
            className='auth-form__button-submit'
            type='submit'
            onClick={handleSubmit}
          >
            {props.button}
          </button>
        )}
        {underButtonText}
      </div>
    </section>
  );
}

export default AuthForm;
