// import React from 'react';
// import './Cards.css';
// import CardItem from './CardItem';
// import Img1 from '../assets/img3.jpg';
// import Img2 from '../assets/img4.jpg';
// import Img3 from '../assets/img5.jpg';
// import Img4 from '../assets/img6.jpg';

// function Cards() {
//   return (
//     <div className='cards'>
//       <h1>Check out these EPIC events!</h1>
//       <div className='cards__container'>
//         <div className='cards__wrapper'>
//           <ul className='cards__items'>
//             <CardItem
//               src={Img1}
//               text='Join us for an unforgettable night of music, dance, and fun! You wont want to miss this extraordinary event where memories are made.'
//               label='Learn More'
//               path='/event'
//             />
//           </ul>
//           <h2 className='past-events'>Check Out The Past Events</h2>
//           <ul className='cards__items'>
//             <CardItem
//               src={Img2}
//               text='Join us for an unforgettable night of music, dance, and fun! You wont want to miss.'
//               label='Learn More'
//               path='/events1'
//             />
//             <CardItem
//               src={Img3}
//               text='Join us for an unforgettable night of music, dance, and fun! You wont want to miss.'
//               label='Learn More'
//               path='/events2'
//             />
//             <CardItem
//               src={Img4}
//               text='Join us for an unforgettable night of music, dance, and fun! You wont want to miss.'
//               label='Learn More'
//               path='/events3'
//             />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;


import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Img1 from '../assets/img3.jpg';
import Img2 from '../assets/img4.jpg';
import Img3 from '../assets/img5.jpg';
import Img4 from '../assets/img6.jpg';

function Cards() {
  const events=[
    {
      id:1,
      title:"naman",
      text:'Join us for an unforgettable night of music, dance, and fun! You wont want to miss this extraordinary event where memories are made.',
      image:Img4,
       date: "2024-04-01T00:00:00Z"
    },
    {
      id:2,
      title:"naman",
      text:'Join us for an unforgettable night of music, dance, and fun! You wont want to miss this extraordinary event where memories are made.',
      image:Img2,
       date: "2023-05-01T00:00:00Z"
    },
    {
      id:3,
      title:"naman",
      text:'Join us for an unforgettable night of music, dance, and fun! You wont want to miss this extraordinary event where memories are made.',
      image:Img3,
       date: "2023-06-01T00:00:00Z"
    },
    {
      id:4,
      title:"naman",
      text:'Join us for an unforgettable night of music, dance, and fun! You wont want to miss this extraordinary event where memories are made.',
      image:Img2,
       date: "2023-07-01T00:00:00Z"
    },
    {
      id:5,
      title:"naman",
      text:'Join us for an unforgettable night of music, dance, and fun! You wont want to miss this extraordinary event where memories are made.',
      image:Img3,
       date: "2023-08-01T00:00:00Z"
    }
  ]
  const currentDate = new Date().toISOString();
  const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));
const latestOrUpcomingEvent = sortedEvents.find(event => event.date >= currentDate) || sortedEvents[sortedEvents.length - 1];
const remainingEvents = sortedEvents.filter(event => event.id !== latestOrUpcomingEvent.id);


  return (
    <div className='cards'>
      <h1>Check out these EPIC events!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={latestOrUpcomingEvent.image}
              text={latestOrUpcomingEvent.text}
              label='Learn More'
              path={`/events/${latestOrUpcomingEvent.id}`}
            />
          </ul>
          <h2 className='past-events'>Check Out The Past Events</h2>
          <ul className='cards__items'>
           { 
           remainingEvents.map((event)=>(
            <CardItem key={event.id}
            src={event.image}
            text={event.text}
            label='Learn More'
            path={`/events/${event.id}`}
          />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;