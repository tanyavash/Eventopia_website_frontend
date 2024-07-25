// import '../../App.css';
// import Cards from '../Cards';
// import Footer from '../Footer';
// import HeroSection from '../HeroSection';
// import React from 'react'

// function Home() {
//   return (
//     <>
//       <HeroSection/>
//       <Cards/>
//       <Footer/>
//     </>
//   )
// }

// export default Home;

import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import React from 'react'

function Home() {
  return (
    <>
      <HeroSection/>
      {/* Intro Component: Brief introduction to POWERGRID and the purpose of the events website. */}
      <Cards/> {/* Cards Component: Current/upcoming Event */}
      {/* Past Events in cards */}
      {/* Latest Updates regarding Events */}
      {/* Gallery */}
    </>
  )
}

export default Home;
