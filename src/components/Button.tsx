import React from 'react'
import { Button as ButtonConfig } from '../types/buttonList-types'; // type

export type ButtonProps = {
  isConstructor: boolean,
  config: ButtonConfig,
  parent: string,
  onDragStart: (e: React.DragEvent<HTMLDivElement>, parent: string, config: ButtonConfig) => void,
  onclick: (type: string, action: string) => void,
  }

export const Button = ({ isConstructor, config, parent, onDragStart, onclick }: ButtonProps) => {
  let buttonText = config.action;
  // const buttonFunctionAtrrs = isConstructor ?
  //     { onDragStart: (event: React.DragEvent<HTMLDivElement>) => onDragStart(event) } :
  //     { onclick: () => onclick(config.type, config.action) };

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
      onDragStart = {(event) => onDragStart(event, parent, config)}
      onClick = {() => onclick(config.type, config.action)}
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