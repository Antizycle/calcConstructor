
import React, { useState } from 'react'
import { ButtonList } from '../types/buttonList-types'; // type
import { buttonList } from './buttonList/buttonList'; // data
import { ItemBox } from './ItemBox';

export const Calculator = () => {
  const [ isConstructor, SetIsConstructor ] = useState<boolean>(true);
  const [ itemBox, SetItemBox ] = useState<ButtonList | null>(buttonList);
  const [ buildBox, SetBuildBox ] = useState<ButtonList | null>(null);


  return (
    <main className='main'>
      <section className='main__mode-toggler'>
        <div className='mode-toggler__container'>

          <div className="container">
            <ItemBox 
              isConstructor={isConstructor} 
              boxType='item' 
              buttons={itemBox} 
              setButtons={SetItemBox} 
              key='itemBox'
              />

            <ItemBox 
              isConstructor={isConstructor} 
              boxType='build' 
              buttons={buildBox} 
              setButtons={SetBuildBox} 
              key='buildBox'
              />
          </div>

        </div>
      </section>
    </main>
  );
}