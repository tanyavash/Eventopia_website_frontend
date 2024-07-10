import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Img1 from '../assets/img3.jpg';
import Img2 from '../assets/img4.jpg';
import Img3 from '../assets/img5.jpg';
import Img4 from '../assets/img6.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC events!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Img1}
              text='Join us for an unforgettable night of music, dance, and fun! You wont want to miss this extraordinary event where memories are made.'
              label='Learn More'
              path='/event'
            />
          </ul>
          <h2 className='past-events'>Check Out The Past Events</h2>
          <ul className='cards__items'>
            <CardItem
              src={Img2}
              text='Join us for an unforgettable night of music, dance, and fun! You wont want to miss.'
              label='Learn More'
              path='/events1'
            />
            <CardItem
              src={Img3}
              text='Join us for an unforgettable night of music, dance, and fun! You wont want to miss.'
              label='Learn More'
              path='/events2'
            />
            <CardItem
              src={Img4}
              text='Join us for an unforgettable night of music, dance, and fun! You wont want to miss.'
              label='Learn More'
              path='/events3'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;