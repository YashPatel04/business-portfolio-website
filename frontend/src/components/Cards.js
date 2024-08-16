import React from 'react';
import './Cards.css';
import Carditem from './Carditem.js';
// Import images
import mobilImage from './images/mobil.jpg';
import amocoImage from './images/amoco 1.jpg';
import bpImage from './images/bp.jpg';
import baImage from './images/ba.jpg';
import office from './images/office.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Few Of Our Lucrative Ventures</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <Carditem
              src={office}
              text='Our Headquarters'
              label=''
              path='/'
            />
            <Carditem
              src={amocoImage}
              text='Amoco Gas Station and Convinience Store'
              label=''
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <Carditem
              src={bpImage}
              text='BP Gas Station and Convinience Store'
              label=''
              path='/'
            />
            <Carditem
              src={baImage}
              text='Palm Coast Bowling Alley'
              label=''
              path='/'
            />
            <Carditem
              src={mobilImage}
              text='Mobil Gas Station and Convenience Store'
              label='Mobil'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;