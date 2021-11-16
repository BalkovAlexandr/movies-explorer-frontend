import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';

function Login(props) {
  function handleSubmit(password, email) {
    props.onLogin(password, email);
  }

  return (
    <AuthForm
      title='Рады видеть!'
      button='Войти'
      needUnderButton={true}
      onSubmit={handleSubmit}
      isClearInput={props.isClearInput}
      isRegister={false}
    >
      <div className='auth-form__signin'>
        <p>
          Еще не зарегистрированы?
          <NavLink to='/signup' className='auth-form__signin-link'>
            Регистрация
          </NavLink>
        </p>
      </div>
    </AuthForm>
  );
}

export default Login;
