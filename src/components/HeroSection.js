import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src = './assets/video1.mp4' autoPlay loop muted />
      <h1>CULTURAL EVENTS</h1>
      <p>What Are You Waiting For?</p>
      <div className='hero-btns'>
        <Button
            className= 'btns'
            buttonStyle='btn--outline'
            buttonSize= 'btn--large'
        >Get Started</Button>
      </div>
    </div>
  )
}

export default HeroSection;
