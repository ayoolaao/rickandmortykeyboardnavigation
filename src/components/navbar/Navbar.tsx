import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href='http://ayoola.io/' target='_blank' rel='noreferrer' className='navbar__ayoola'>ayoola.io</a>
      <div className='navbar__title'>Rick and Morty KeyBoard Navigation</div>
    </nav>
  );
};

export default Navbar;
