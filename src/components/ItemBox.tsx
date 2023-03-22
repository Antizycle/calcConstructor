import React from 'react'
import { ButtonList, Button as ButtonConfig } from '../types/buttonList-types'; // type
import { Button } from './Button';
import { buttonList } from './buttonList/buttonList';

export type BoxProps = {
  isConstructor: boolean,
  boxType: 'item' | 'build',
  buttons: ButtonList | null;
  opposedButtons: ButtonList | null;
  setMyButtons: React.Dispatch<React.SetStateAction<ButtonList | null>>,
  setOpposedButtons: React.Dispatch<React.SetStateAction<ButtonList | null>>,
  onButtonClick: (type: string, action: string) => void,
}

export const ItemBox = ({ isConstructor, boxType, buttons, opposedButtons, onButtonClick, setMyButtons, setOpposedButtons }: BoxProps) => {
  let touchEndData: React.Touch | null = null;

  const onDragStartHandler = (event: React.DragEvent<HTMLDivElement>, parent: string, config: ButtonConfig) => {
    event.dataTransfer.setData("itemId", config.id); // setting data transfer
    event.dataTransfer.setData("parent", parent);
  }

  const onDropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const eventType = 'drag';
    const buttonId = event.dataTransfer.getData('itemId');
    const parentId = event.dataTransfer.getData('parent');
    const targetId = boxType + 'Box';
    const dropPageOffset = [event.pageX, event.pageY];

    finalizeDrop(targetId, parentId, buttonId, dropPageOffset, eventType);
  }

  const onDragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  const finalizeDrop = (targetId: string, parentId: string, buttonId: string, dropPageOffset: number[], eventType: 'touch' | 'drag') => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const buttonElem = document.getElementById(buttonId)!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const targetElem = document.getElementById(targetId)!;

    const targetOffset = [targetElem.offsetLeft, targetElem.offsetTop];
    const targetSize = [targetElem.clientWidth, targetElem.clientHeight];
    const buttonHalfSize = [buttonElem.clientWidth / 2, buttonElem.clientHeight / 2];
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

    let currentButton = buttonList.find(button => button.id === buttonId);

    if (currentButton) {
      let nextMyButtons: ButtonConfig[] = [];
      let nextOpposedButtons: ButtonConfig[] = [];

      currentButton = {...currentButton, position: {top: dropPosition[1], left: dropPosition[0]}};

      if (buttons) nextMyButtons = buttons.filter(button => button.id !== buttonId);
      if (parentId === targetId || eventType === 'drag') nextMyButtons.push(currentButton);

      if (targetId !== parentId) { // if drag - delete from opposed currentButton. if touch append currentButton
        if (opposedButtons) nextOpposedButtons = (eventType === 'drag') ?
                opposedButtons.filter(button => button.id !== buttonId) :
                nextOpposedButtons = opposedButtons.slice();
        if (eventType === 'touch') nextOpposedButtons.push(currentButton);
        setOpposedButtons(nextOpposedButtons);
      }
      setMyButtons(nextMyButtons);
    }

  }

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndData = event.targetTouches[0];
  }

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>, parent: string) => {
    const eventType = 'touch';
    const parentId = boxType + 'Box';
    let targetId = parentId;
    let otherBoxId = 'itemBox';
    let dropPageOffset = [0, 0];
    if (parentId === 'itemBox') otherBoxId = 'buildBox';
    const buttonId = (event.target as HTMLDivElement).id;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const otherBoxElem = document.getElementById(otherBoxId)!;

    const otherBoxX: number[] = [otherBoxElem.offsetLeft, otherBoxElem.offsetLeft + otherBoxElem.clientWidth];
    const otherBoxy: number[] = [otherBoxElem.offsetTop, otherBoxElem.offsetTop + otherBoxElem.clientHeight];
    if (touchEndData) dropPageOffset = [touchEndData.pageX, touchEndData.pageY];

    if ( (otherBoxX[0] < dropPageOffset[0] && dropPageOffset[0] < otherBoxX[1]) &&
         (otherBoxy[0] < dropPageOffset[1] && dropPageOffset[1] < otherBoxy[1]) ) {
      targetId = otherBoxId;
    }

    finalizeDrop(targetId, parentId, buttonId, dropPageOffset, eventType);
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
          ontouchmove={onTouchMove}
          ontouchend={onTouchEnd}
          onClick={onButtonClick}
          parent={boxType + 'Box'}
          />
      )}
    </div>
  );
}