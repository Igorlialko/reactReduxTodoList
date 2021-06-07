import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <video src='videos/video-2.mp4' autoPlay loop muted />
      <h1>Todo List</h1>
      <p>What do you want to write?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={''}
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
