import React from 'react'
import '../App.css';
import './Section.css';
import video from './video.mp4';
import {useState, useEffect, useRef } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
function Section() {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    
    if (duration - currentTime <= 35) {
      // Apply blur effect (add a CSS class to the video element)
      videoRef.current.classList.add('blur-effect');
      textRef.current.classList.remove('invisible-text');
      textRef.current.classList.add('visible-text');
    } else {
      // Remove blur effect (remove the CSS class)
      videoRef.current.classList.remove('blur-effect');
      textRef.current.classList.add('invisible-text');
    }
  };
  
  return(
    <div> 
      <p className='invisible-text' ref={textRef}> <a>Best In Class</a> <TypeWriterEffect
        className='typewriter' 
        textStyle={{}}  
        startDelay={10000}
        cursorColor="#fff"
        multiText={[
          ' Gas Stations.',
          ' Business Management Solutions.',
          ' Restauraunts.',
          ' Estate Management Solutions.',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      /></p>
      <video ref={videoRef} src={video} autoPlay muted onTimeUpdate={handleTimeUpdate}/>
    </div>
  )
}

export default Section
