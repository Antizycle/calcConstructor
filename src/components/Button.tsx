import React, { useState } from 'react'
import { Button as ButtonConfig } from '../types/buttonList-types'; // type

export type ButtonProps = {
  isConstructor: boolean,
  config: ButtonConfig
}

  // placeholder functions, must be modules and imported at box componets
  // and passed down as props to buttons
  const onDragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
    return;
  }

  const onClickHandler = (type: string, action: string) => {
    console.log(type, action);
    return;
  }


export const Button = ({ isConstructor, config }: ButtonProps) => {
  let buttonText = config.action;
  const buttonFunctionAtrrs = isConstructor ?
      { onDragStart: (event: React.DragEvent<HTMLDivElement>) => onDragStartHandler(event) } :
      { onclick: () => onClickHandler(config.type, config.action) };

  const classNameMod = ((config.id === 'result') ? '' : ' btn');


  if (buttonText === 'pow') buttonText = 'x²';
  if (buttonText === 'sqrt') buttonText = '√x';
  if (buttonText === 'reset') buttonText = 'C';
  if (buttonText === 'bkspc') buttonText = '⇐';

  console.log(classNameMod);

  return (
    <div 
      key={ config.id }
      id={ config.id }
      style={ {top: config.position.top, left: config.position.left} }
      className={ 'block-' + config.size + classNameMod }
      draggable={ isConstructor }
      { ...buttonFunctionAtrrs }
      >
      {config.id === 'result' ?
        <>
          <input className="block-4x1__query" id="calcQuery" value="" disabled />
          <input className="block-4x1__result" id="calcResult" value="0" disabled />
        </> :
      buttonText
      }
    </div>
  );
}