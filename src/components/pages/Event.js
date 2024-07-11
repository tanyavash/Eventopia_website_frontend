import React from 'react'
import '../pages/Event.css';
import { PiMouseScrollFill } from "react-icons/pi";
import Img2 from '../../assets/img4.jpg';
import Img3 from '../../assets/img4.jpg';
import Img4 from '../../assets/img5.jpg';

export default function Event() {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className='event-page'>
      
      <div className='event-content'>
        <h1 className='event-title'>RAISING DAY 2024</h1>
        <button className='event-button'>Book Tickets</button>
        <div className='scroll-icon' onClick={scrollToBottom}>
          <PiMouseScrollFill />
          <h2>Check out the EPIC artists lined Up!</h2>



            <div className='event-cards'>
              <div className='cards__container'>
                <div className='cards__wrapper'>
                 <ul className='cards__items'>
           
                      <li className='cards__item'>
                        <div className='cards__item__link'>
                          <img src={Img2} alt='Image 2' className='cards__item__img' />
                          <div className='cards__item__info'>
                            <h3 >Robert Porter</h3>
                          </div>
                        </div>
                      </li>

                      <li className='cards__item'>
                        <div className='cards__item__link'>
                          <img src={Img3} alt='Image 3' className='cards__item__img' />
                          <div className='cards__item__info'>
                            <h3>Grace Moreno</h3>
                          </div>
                        </div>
                      </li>

                      <li className='cards__item'>
                        <div className='cards__item__link'>
                          <img src={Img4} alt='Image 4' className='cards__item__img' />
                          <div className='cards__item__info'>
                            <h3>Fishing Basket</h3>
                          </div>
                        </div>
                      </li>

                  </ul>
               </div>
             </div>
           </div>


        </div>
      </div>

      
    


    </div>
    
  )
}

