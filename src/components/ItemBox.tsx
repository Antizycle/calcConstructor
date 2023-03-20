import React, { useState } from 'react'
import { ButtonList } from '../types/buttonList-types'; // type
import { buttonList } from './buttonList/buttonList'; // data
import { Button } from './Button';

export type BoxProps = {
  isConstructor: boolean,
  boxType: 'item' | 'build',
  buttons: ButtonList | null;
  setButtons: React.Dispatch<React.SetStateAction<ButtonList | null>>
}

export const ItemBox = ({ isConstructor, boxType, buttons, setButtons }: BoxProps) => {
  return (
    <div className={'box box--' + boxType} id={boxType + 'Box'}>
      { buttons && buttons.map( button => 
        <Button isConstructor={isConstructor} config={button} key={button.id}/>
      )}
    </div>
  );
}