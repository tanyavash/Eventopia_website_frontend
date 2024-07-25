import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css';
import  Video from '../assets/video2.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src = {Video} autoPlay loop muted />
      <h1>CULTURAL EVENTS</h1>
      <p>What Are You Waiting For?</p>
      <div className='hero-btns'>
        <Button
            className= 'btns'
            buttonStyle='btn--outline'
            buttonSize= 'btn--large'
        >Live Events</Button>
      </div>
    </div>
  )
}

export default HeroSection;
