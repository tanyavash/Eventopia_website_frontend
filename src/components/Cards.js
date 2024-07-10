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
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Learn More'
              path='/event'
            />
          </ul>
          <h2 className='past-events'>Check Out The Past Events</h2>
          <ul className='cards__items'>
            <CardItem
              src={Img2}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Learn More'
              path='/events1'
            />
            <CardItem
              src={Img3}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Learn More'
              path='/events2'
            />
            <CardItem
              src={Img4}
              text='Ride through the Sahara Desert on a guided camel tour'
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