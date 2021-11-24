import './App.css';
import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Landing/Header/Header';
import Footer from '../Landing/Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../User/Profile/Profile';
import Login from '../User/Login/Login';
import Register from '../User/Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Landing/Preloader/Preloader';
import mainApi from '../../utils/MainApi';
import { SUCCESSFUL_CODE } from '../../utils/constants';


function App() {
  const history = useHistory();
  
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoaging, setIsLoaging] = React.useState(true);
 
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isError, setIsError] = React.useState(false);
 
  const [infoMessage, setInfoMessage] = React.useState({
    isShown: false,
    message: '',
    code: SUCCESSFUL_CODE,
  });

  React.useEffect(() => {
    setIsLoaging(true);
    mainApi.getUserData()
      .then(data => {
        handleLoggedIn();
        setCurrentUser(data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => setIsLoaging(false))
  }, [loggedIn]);

  React.useEffect(() => {
    if(loggedIn){
      mainApi.getUsersMovies()
      .then((data) => {
        setSavedMovies(data);
        setIsError(false);
      })
      .catch(err => {
        setIsError(true);
        console.log(err);
      })
    }
  }, [loggedIn]);

  function handleLoggedIn() {
    setLoggedIn(true);
  };

  function handleRegister(name, email, password) {
    mainApi.register(name, email, password)
      .then(data => {
        if(data){
          console.log(data);
          handleLogin(data.email, password);
        } 
      })
      .catch(({ message, statusCode }) => {
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          message,
          code: statusCode,
          type: 'register',
        });
      })
  };

  function handleLogin(email, password) {
    setIsLoaging(true);
    mainApi.login(email, password)
      .then(res => {
        handleLoggedIn();
        history.push('/movies');
      })
      .catch(({ message, statusCode }) => {
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          message,
          code: statusCode,
          type: 'login',
        });
      })
      .finally(() => setIsLoaging(false))
  };

  function handleSignOut() {
    mainApi.signout()
      .then(res => {
        setLoggedIn(false);
        setCurrentUser({});
        localStorage.clear();
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      })
  };

  function handleUpdateUser(name, email) {
    mainApi.updateUserProfile(name, email)
      .then(data => {
        setCurrentUser(data);
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          type: 'profile',
        });
      })
      .catch(({ message, statusCode }) => {
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          message,
          code: statusCode,
          type: 'profile',
        });
      })
  };

  function handleSaveMovie(movie) {
    mainApi.saveNewMovie(movie)
      .then(newCard => {
        setSavedMovies([newCard, ...savedMovies]);
      })
      .catch(err => console.log(err))
  };

  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        const newMoviesList = savedMovies.filter((m) => m._id === movie._id ? false : true);
        setSavedMovies(newMoviesList);
      })
      .catch(err => console.log(err))
  };

  function handleClickResetInfoMessage() {
    if (infoMessage.isShown){
      setInfoMessage({
        ...infoMessage,
        isShown: false,
        message: '',
        type: '',
        code: SUCCESSFUL_CODE,
      });
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className='app' onClick={infoMessage.isShown ? handleClickResetInfoMessage : null}>
        {isLoaging ? (
          <Preloader />
        ) : (
          <>
            <Header loggedIn={loggedIn} /> 

            <Switch>
              <ProtectedRoute
                exact path='/movies'
                loggedIn={loggedIn}
                component={Movies}
                savedMoviesList={savedMovies}
                onLikeClick={handleSaveMovie}
                onDeleteClick={handleDeleteMovie}
              />

              <ProtectedRoute
                exact path='/saved-movies'
                loggedIn={loggedIn}
                component={SavedMovies}
                list={savedMovies}
                onDeleteClick={handleDeleteMovie}
                isError={isError}
              />

              <ProtectedRoute
                exact path='/profile'
                loggedIn={loggedIn}
                component={Profile}
                onSignOut={handleSignOut}
                onUpdate={handleUpdateUser}
                infoMessage={infoMessage}
              />

              <Route path='/' exact>
                <Main />
              </Route>

              <Route path='/signup'>
                {loggedIn ? <Redirect to='/movies' /> : <Register onRegister={handleRegister} infoMessage={infoMessage} />}
              </Route>

              <Route path='/signin'>
                {loggedIn ? <Redirect to='/movies' /> : <Login onLogin={handleLogin} infoMessage={infoMessage} />}
              </Route>

              <Route path="*">
                <PageNotFound />
              </Route>

            </Switch>

            <Footer />
          </>
        )}
      </div>

    </CurrentUserContext.Provider>
  );
};

export default App;
