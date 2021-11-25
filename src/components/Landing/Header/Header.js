import './Header.css';
import { Route } from 'react-router-dom';
import Menu from '../../Menu/Menu';
import Logo from '../Logo/Logo';


function Header({ loggedIn }) {

  const endpoints = ['/movies', '/saved-movies', '/profile', '/'];

  return (
    <Route exact path={endpoints}> 
      <header className='header root__section'>
        <div className='header root__content'>
          <Logo />
          <Menu loggedIn={loggedIn}/>
        </div>
      </header>
    </Route>
  );
};
  
export default Header;