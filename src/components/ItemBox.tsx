import React from 'react'
import { ButtonList, Button as ButtonConfig } from '../types/buttonList-types'; // type
import { Button } from './Button';
import { buttonList } from './buttonList/buttonList';

export type BoxProps = {
  isConstructor: boolean,
  boxType: 'item' | 'build',
  buttons: ButtonList | null;
  opposedButtons: ButtonList | null;
  setMyButtons: React.Dispatch<React.SetStateAction<ButtonList | null>>
  setOpposedButtons: React.Dispatch<React.SetStateAction<ButtonList | null>>
}

export const ItemBox = ({ isConstructor, boxType, buttons, opposedButtons, setMyButtons, setOpposedButtons }: BoxProps) => {

  const onDragStartHandler = (event: React.DragEvent<HTMLDivElement>, parent: string, config: ButtonConfig) => {
    event.dataTransfer.setData("itemId", config.id); // setting data transfer
    event.dataTransfer.setData("parent", parent);
  }

  const onDropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    
    const itemId = event.dataTransfer.getData('itemId');
    const itemParentId = event.dataTransfer.getData('parent');
    const targetId = boxType + 'Box';
    let currentButton = buttonList.find( entry => entry.id === itemId);     
    
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const boxElem = document.getElementById(targetId)!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const buttonElem = document.getElementById(itemId)!;

    const buttonHalfSize = [buttonElem.clientWidth / 2, buttonElem.clientHeight / 2];
    const targetOffset = [boxElem.offsetLeft, boxElem.offsetTop];
    const targetSize = [boxElem.clientWidth, boxElem.clientHeight];
    const dropPageOffset = [event.pageX, event.pageY];
    const dropPosPercentX = (dropPageOffset[0]- buttonHalfSize[0] - targetOffset[0]) * 100 / targetSize[0];
    const dropPosPercentY = (dropPageOffset[1]- buttonHalfSize[1] - targetOffset[1]) * 100 / targetSize[1];
    const maxDropPosition = [
      Math.round(99 - buttonHalfSize[0] * 200 / targetSize[0]), 
      Math.round(99 - buttonHalfSize[1] * 200 / targetSize[1])];

    const dropPosition = [Math.round(dropPosPercentX), Math.round(dropPosPercentY)];

    // checking if out of a target container and correcting the drop point
    if (dropPosition[0] < 1) dropPosition[0] = 1;
    if (dropPosition[0] > maxDropPosition[0]) dropPosition[0] = maxDropPosition[0];
    if (dropPosition[1] < 1) dropPosition[1] = 1;
    if (dropPosition[1] > maxDropPosition[1]) dropPosition[1] = maxDropPosition[1];

    if (currentButton) {

      let nextMyButtons: ButtonConfig[] = [];
      let nextOpposedButtons: ButtonConfig[] = [];

      currentButton = {...currentButton, position: {top: dropPosition[1], left: dropPosition[0]}};
      // remove current button from current parent State in any case
      // and append new current button back
      // if drop target is not a parent box, remove from parent
      if (buttons) nextMyButtons = buttons.filter(button => button.id !== itemId);
      nextMyButtons.push(currentButton);

      if (targetId !== itemParentId) {
        if (opposedButtons) nextOpposedButtons = opposedButtons.filter(button => button.id !== itemId);
        
        if (nextOpposedButtons) setOpposedButtons(nextOpposedButtons);
      }
      if (nextMyButtons) setMyButtons(nextMyButtons);
    }
  }

  const onDragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  const onClickHandler = (type: string, action: string) => {
    console.log(type, action);
    return;
  }


  return (
    <div 
      className={'box box--' + boxType} 
      id={boxType + 'Box'}
      onDrop={(event) => onDropHandler(event)}
      onDragOver={(event) => onDragOverHandler(event)}
      >
      { buttons && buttons.map( button => 
        <Button 
          isConstructor={isConstructor} 
          config={button} 
          key={button.id}
          onDragStart={onDragStartHandler}
          onclick={onClickHandler}
          parent={boxType + 'Box'}
          />
      )}
    </div>
  );
}