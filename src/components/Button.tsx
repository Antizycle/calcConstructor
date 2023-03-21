import React, { useContext } from 'react'
import { Button as ButtonConfig } from '../types/buttonList-types'; // type
import { calcStrContext } from './Calculator';

export type ButtonProps = {
  isConstructor: boolean,
  config: ButtonConfig,
  parent: string,
  onDragStart: (e: React.DragEvent<HTMLDivElement>, parent: string, config: ButtonConfig) => void,
  onClick: (type: string, action: string) => void,
  }

export const Button = ( { isConstructor, config, parent, onDragStart, onClick }: ButtonProps) => {
  const calcStr = useContext(calcStrContext);

  let buttonText = config.action;
  const buttonFunctionAtrrs = isConstructor ?
      { onDragStart: (event: React.DragEvent<HTMLDivElement>) => onDragStart(event, parent, config) } :
      { onClick: () => onClick(config.type, config.action) };

  const classNameMod = ((config.id === 'result') ? '' : ' btn');

  if (buttonText === 'pow') buttonText = 'x²';
  if (buttonText === 'sqrt') buttonText = '√x';
  if (buttonText === 'reset') buttonText = 'C';
  if (buttonText === 'bkspc') buttonText = '⇐';

  return (
    <div 
      key = { config.id }
      id = { config.id }
      style = { {top: config.position.top + '%', left: config.position.left + '%'} }
      className = { 'block-' + config.size + classNameMod }
      draggable = { isConstructor }
      { ...buttonFunctionAtrrs }
      >
      {config.id === 'result' ?
        <>
          <input className="block-4x1__query" id="calcQuery" value={ calcStr[1] } maxLength={16} disabled />
          <input className="block-4x1__result" id="calcResult" value={ calcStr[0] } maxLength={30} disabled />
        </> :
        buttonText
      }
    </div>
  );
}