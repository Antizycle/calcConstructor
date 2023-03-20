import React from 'react';


export const App: React.FC = () => {
  return (
    <>
    <header className='header'>
      <h1 className='header__title'>
        Drag'n'Drop Calculator Constructor
      </h1>
    </header>

    <h1>Content here</h1>

    <footer className='footer'>
      2023 / By&nbsp;
      <a href="http://antizycle.online/" target='_blank' rel="noreferrer" className='footer__link'>
        Antizycle
      </a>
    </footer>
    </>
  );
}