import React from 'react';
import { Calculator } from './components/Calculator';


export const App: React.FC = () => {
  return (
    <>
    <header className='header'>
      <h1 className='header__title'>
        Drag'n'Drop Calculator Constructor
      </h1>
    </header>

    <Calculator />

    <footer className='footer'>
      2023 / By&nbsp;
        Antizycle
    </footer>
    </>
  );
}