import React, { useRef, useState, createContext} from 'react'
import { ButtonList } from '../types/buttonList-types'; // type
import { buttonList } from './buttonList/buttonList'; // data
import { ItemBox } from './ItemBox';
import calcIcon from '../img/calc-mode__icon.svg';
import buildIcon from '../img/build-mode__icon.svg';


export const calcStrContext = createContext( ['0', ''] );

export const Calculator = () => {
  const [ isConstructor, SetIsConstructor ] = useState<boolean>(true);
  const [ itemBox, SetItemBox ] = useState<ButtonList | null>(buttonList);
  const [ buildBox, SetBuildBox ] = useState<ButtonList | null>(null);
  const [ calcQueryStr, setCalcQueryStr ] = useState<string>('');
  const [ calcResultStr, setCalcResultStr ] = useState<string>('0');
  const numberStr = useRef('');
  const occured = useRef( {special: false, action: false, equals: false} );
  const result = useRef< {cur: number | null, prev: number | null} >( {cur: null, prev: null} );
  const calcAction = useRef( {cur: '', prev: ''} );
  const curNumber = useRef(0);

  const formatResultStr = (action: string) => {
    if (action === '±') {
      numberStr.current = calcResultStr;
      if (numberStr.current.startsWith('-')) numberStr.current = numberStr.current.slice(1);
      else if (numberStr.current === '0') return;
      else numberStr.current = "-" + numberStr.current;
      } else if (action === 'bkspc') {
        numberStr.current = numberStr.current.slice(0, -1);
      if (numberStr.current === '' || numberStr.current === '-') numberStr.current = '0';
    } else if (action === '.') {
      if (!numberStr.current.includes('.')) {
        numberStr.current += action;
      }
    }
    else if (numberStr.current.startsWith('0') && !numberStr.current.includes('.') && (numberStr.current.length === 1)) {
      numberStr.current = numberStr.current.slice(1);
      numberStr.current += action;
    }
    else numberStr.current += action;
    occured.current.action = false;
    setCalcResultStr(numberStr.current);
  }

  const calcReset = () => {
    numberStr.current = '';
    result.current = {cur: null, prev: null};
    calcAction.current = {cur: '', prev: ''};
    occured.current = {special: false, action: false, equals: false};
    setCalcQueryStr('');
    setCalcResultStr('0');
  }

  const calcResult = (type: string, action: string) => {

    if (numberStr.current !== '') curNumber.current = parseFloat(numberStr.current);
    if (result.current.cur === null) result.current.cur = curNumber.current;

    let nextQueryStr = '';
    let curResultStr = '';

    if (occured.current.equals) occured.current.action = false;
    if (result.current.prev !== null && calcAction.current.prev !== null && !occured.current.action) {
      nextQueryStr = `${result.current.prev}${calcAction.current.prev}`;
    }

    if (type === 'special') { // pow, sqrt and %
  
      if (occured.current.equals) occured.current.equals = false;
      if (occured.current.action) nextQueryStr = `${result.current.prev}${calcAction.current.prev}`;

      if (action === 'pow') {
        curResultStr = `(${curNumber.current})²`;
        curNumber.current = curNumber.current * curNumber.current;
      }
      if (action === 'sqrt') {
        if (curNumber.current > 0) {
          curResultStr = `√(${curNumber.current})`;
          curNumber.current = Math.sqrt(curNumber.current);
        }
        else setCalcResultStr('Invalid input');
      }
      if (action === '%') {
        curResultStr = `${curNumber.current}%`;
        curNumber.current = result.current.prev           ? 
          (result.current.prev * curNumber.current / 100) :
          0;
      }

      calcAction.current.cur = ''
      occured.current.special = true;
      occured.current.action = false;
    }
    else { // normal operations
      if (occured.current.equals && action !== '=') {
        calcAction.current.prev = '';
        occured.current.equals = false;
        occured.current.action = false;
        nextQueryStr = '';
      }

      if (calcAction.current.prev && (numberStr.current !== '' || occured.current.special || action === '=')) {
        if ((!occured.current.action || action === '=') && result.current.prev) {
          if (calcAction.current.prev === '+') result.current.cur = result.current.prev + curNumber.current;
          if (calcAction.current.prev === '-') result.current.cur = result.current.prev - curNumber.current;
          if (calcAction.current.prev === '*') result.current.cur = result.current.prev * curNumber.current;
          if (calcAction.current.prev === '/') {
            if (curNumber.current !== 0) result.current.cur = result.current.prev / curNumber.current;
            else {
              setCalcResultStr('Invalid input');
              return;
            }
          }
          occured.current.action = true;
        }

        if (action === '=') occured.current.equals = true;
      } else {
        occured.current.action = true;
      }

      occured.current.special = false;
      curResultStr = curNumber.current.toString();
      calcAction.current.cur = action;
      result.current.prev = result.current.cur;

      if (action !== '=') {
        calcAction.current.prev = action;
      }
    }

    nextQueryStr += `${curResultStr}${calcAction.current.cur}`;

    setCalcQueryStr(nextQueryStr);
    if (occured.current.special) setCalcResultStr(curNumber.current.toString().slice(0, 16));
    else setCalcResultStr(result.current.cur.toString().slice(0, 16));
    numberStr.current = '';
  }

  const onClickHandler = (type: string, action: string) => {
    if (calcResultStr === 'Infinity' || calcResultStr === 'NaN' || calcResultStr === 'Invalid input') {
      calcReset();
    }
    if (type === 'number') formatResultStr(action);
    if (type === 'reset') calcReset();
    if (type === 'action' || type === 'special') calcResult(type, action);
    
  }



  return (
    <main className='main'>
      <section className='main__mode' onClick={() => SetIsConstructor(!isConstructor)}>
        <div className={'mode__cont mode__cont--constr' + (isConstructor ? ' constr-active' : '')}>
          <img src={buildIcon} alt='Constructor mode' style={ {opacity: isConstructor ? 1 : 0} } />
          Constructor
        </div>
        <div className={'mode__cont mode__cont--calc' + (!isConstructor ? ' calc-active' : '')}>
        <img src={calcIcon} alt='Calculator mode'  style={ {opacity: isConstructor ? 0 : 1} } />
          Calculator
        </div>
      </section>

      <section className="main__boxes container">
      <calcStrContext.Provider value={ [calcResultStr, calcQueryStr] }>
        <ItemBox 
          isConstructor={isConstructor} 
          boxType='item' 
          buttons={itemBox} 
          opposedButtons={buildBox}
          setMyButtons={SetItemBox} 
          setOpposedButtons={SetBuildBox}
          onButtonClick={onClickHandler}
          key='itemBox'
          />

        <ItemBox 
          isConstructor={isConstructor} 
          boxType='build' 
          buttons={buildBox} 
          opposedButtons={itemBox}
          setMyButtons={SetBuildBox} 
          setOpposedButtons={SetItemBox} 
          onButtonClick={onClickHandler}
          key='buildBox'
          />
        </calcStrContext.Provider>
      </section>
    </main>
  );
}