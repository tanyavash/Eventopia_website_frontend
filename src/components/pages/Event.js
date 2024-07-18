// import React from 'react'
// import '../pages/Event.css';
// import { PiMouseScrollFill } from "react-icons/pi";
// import Img2 from '../../assets/img4.jpg';
// import Img3 from '../../assets/img4.jpg';
// import Img4 from '../../assets/img5.jpg';

// export default function Event() {
//   const scrollToBottom = () => {
//     window.scrollTo({ top: document.body.offsetHeight, behavior: 'smooth' });
//   };

//   return (
//     <div className='epage'>
      
//       <div className='econtent'>
//         <h1 className='etitle'>RAISING DAY 2024</h1>
//         <button className='ebutton'>Book Tickets</button>
        
//         <div className='scroll-icon' onClick={scrollToBottom}>
//           <PiMouseScrollFill />
//           <h2>Check out the EPIC artists lined Up!</h2>
//         </div>

//       </div>

//       <div className="ecards">
//         <div className="ecards__container">
//           <div className="ecards__wrapper">

//             <div className="ecards__item">
//               <a href="#" className="ecards__item__link">
//                 <img src={Img2} alt="Card 1" className="ecards__item__img" />
//                 <div className="ecards__item__info">
//                   <h3 className="ecards__item__title">Card 1 Title</h3>
//                   {/* <p className="ecards__item__text">Card 1 Description</p> */}
//                 </div>
//               </a>
//             </div>

//             <div className="ecards__item">
//               <a href="#" className="ecards__item__link">
//                 <img src={Img3} alt="Card 2" className="ecards__item__img" />
//                 <div className="ecards__item__info">
//                   <h3 className="ecards__item__title">Card 2 Title</h3>
//                   {/* <p className="ecards__item__text">Card 2 Description</p> */}
//                 </div>
//               </a>
//             </div>

//             <div className="ecards__item">
//               <a href="#" className="ecards__item__link">
//                 <img src={Img4} alt="Card 3" className="ecards__item__img" />
//                 <div className="ecards__item__info">
//                   <h3 className="ecards__item__title">Card 3 Title</h3>
//                   {/* <p className="ecards__item__text">Card 3 Description</p> */}
//                 </div>
//               </a>
//             </div>

//           </div>
//         </div>
//       </div>



//       <div className='black-bg'>
        
//       </div>

//       <div className='days-to-go'>
//         <h3 className='heading'>DAYS TO GO</h3>
//       </div>

//       <div className='event-details-section'>
//         <h3 className='details-heading'>EVENT DETAILS</h3>

//         <div className='event-details-container'>

//           <div className='event-details-box'>
//             <div className='details-title'>When</div>
//             <div className='details-content'>
//               <p>December 30, 2025</p>
//               <p>6:00 PM - 10:00 PM ET</p>
//               <button className='details-button'>ADD TO CALENDAR</button>
//             </div>
//           </div>

//           <div className='event-details-box'>
//             <div className='details-title'>Where</div>
//             <div className='details-content'>
//               <p>The Fess Parker A Doubletree Resort</p>
//               <p>East Hanna Avenue, IN 46227</p>
//               <button className='details-button'>GET MAP</button>
//             </div>
//           </div>

//           <div className='event-details-box'>
//             <div className='details-title'>Planner</div>
//             <div className='details-content'>
//               <p>Creative Services</p>
//               <p>creativeservices@cvent.com</p>
//               <button className='details-button'>CONTACT US</button>
//             </div>
//           </div>

//         </div>
//       </div>

      // <div className='grab-tickets-section'>
      //   <h3 className='details-heading'>GRAB YOUR TICKETS</h3>

      //     <div className='tickets-container'>

      //       <div className='tickets-box'>
      //         <div className='tickets-heading'> Employee ID</div>
      //       </div>

      //       <div className='tickets-box'>
      //         <div className='tickets-heading'>Number of Tickets</div>
      //       </div>

      //     </div>

      // </div>

//     </div>
//   )
// }









import React from 'react'
import '../pages/Event.css';
import { PiMouseScrollFill } from "react-icons/pi";
import Img2 from '../../assets/img4.jpg';
import Img3 from '../../assets/img4.jpg';
import Img4 from '../../assets/img5.jpg';
import Footer from '../Footer';
import CountdownTimer from '../countdown';

export default function Event() {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const targetDate = "2024-08-11T10:00:00";

  return (
    <div className='epage'>
      <div className='backgroundContainer'>

      <div className='econtent'>
        <h1 className='etitle'>RAISING DAY 2024</h1>
        <button className='ebutton'>Book Tickets</button>
        
        <div className='scroll-icon' onClick={scrollToBottom}>
          <PiMouseScrollFill />
          <h2>Check out the EPIC artists lined Up!</h2>
        </div>

      </div>
      </div>

      <div className="ecards">
        <div className="ecards__container">
          <div className="ecards__wrapper">

            <div className="ecards__item">
              <a href="#" className="ecards_item_link">
                <img src={Img2} alt="Card 1" className="ecards_item_img" />
                <div className="ecards_item_info">
                  <h3 className="ecards_item_title">Card 1 Title</h3>
                  {/* <p className="ecards_item_text">Card 1 Description</p> */}
                </div>
              </a>
            </div>

            <div className="ecards__item">
              <a href="#" className="ecards_item_link">
                <img src={Img3} alt="Card 2" className="ecards_item_img" />
                <div className="ecards_item_info">
                  <h3 className="ecards_item_title">Card 2 Title</h3>
                  {/* <p className="ecards_item_text">Card 2 Description</p> */}
                </div>
              </a>
            </div>

            <div className="ecards__item">
              <a href="#" className="ecards_item_link">
                <img src={Img4} alt="Card 3" className="ecards_item_img" />
                <div className="ecards_item_info">
                  <h3 className="ecards_item_title">Card 3 Title</h3>
                  {/* <p className="ecards_item_text">Card 3 Description</p> */}
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className='days-to-go'>
        <h3 className='heading'>DAYS TO GO</h3>
        <CountdownTimer targetDate={targetDate} />
      </div>

      <div className='event-details-section'>
        <h3 className='details-heading'>EVENT DETAILS</h3>

        <div className='event-details-container'>
          <div className='event-details-box'>
            <div className='details-title'>When</div>
            <div className='details-content'>
              <p>December 30, 2025</p>
              <p>6:00 PM - 10:00 PM ET</p>
              <button className='details-button'>ADD TO CALENDAR</button>
            </div>
          </div>

          <div className='event-details-box'>
            <div className='details-title'>Where</div>
            <div className='details-content'>
              <p>The Fess Parker A Doubletree Resort</p>
              <p>East Hanna Avenue, IN 46227</p>
              <button className='details-button'>GET MAP</button>
            </div>
          </div>

          <div className='event-details-box'>
            <div className='details-title'>Planner</div>
            <div className='details-content'>
              <p>Creative Services</p>
              <p>creativeservices@cvent.com</p>
              <button className='details-button'>CONTACT US</button>
            </div>
          </div>
        </div>
      </div>



        <div className='grab-tickets-section'>
        <h3 className='grab-heading'>GRAB YOUR TICKETS</h3>

          <div className='tickets-container'>

            <div className='tickets-box'>
              <div className='tickets-heading'> Employee ID</div>
              <input type="text" className='employee-id-input' />
            </div>

            <div className='tickets-box'>
              <div className='tickets-heading'>Number of Tickets</div>
              <select className='number-of-tickets-select'>
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              </select>
            </div>

            <div className='tickets-box'>
              <div className='tickets-heading'>Extra Tickets Required</div>
              <select className='number-of-tickets-select'>
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              </select>
            </div>

          </div>
        </div>

      <Footer/>


    </div>
  )
}
