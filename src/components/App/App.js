import './App.css';

import { Route, Routes } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {

  return (
    <div className='app'>

        <Header />

          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/saved-movies' element={<SavedMovies />} />
            <Route path='/profile' element={<Profile  />} />
            <Route path='/singup' element={<Register />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/notfound' element={<PageNotFound />} />
          </Routes>

        <Footer />

    </div>
    )

}

export default App;