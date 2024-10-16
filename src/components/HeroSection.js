import React from 'react';
import profilePic from '../assets/Rectangle 1.svg';
import "../styles/heroSection.css";
import Spline from '@splinetool/react-spline';


const HeroSection = () => {
  return (
    <>
   
    <div className='hero-container'>
    <div className='name-container'>
      <img className='pranali-pics hover-zoom'
       loading="lazy"
       src={profilePic}
      // src = ""
       alt="Profile"
      />
      <div className='name'>Pranali Khatekar</div>
    </div>
    <div className='resume'>Resume</div>
  </div>
    
  <div className='background-section'>
    {/* <img className='logo-img' loading="lazy" src={logo1} alt="Logo" /> */}
    <div className='spline-pranali'>
    <Spline scene="https://prod.spline.design/1QNXhReCJQgnhqsK/scene.splinecode" />
    </div>
  
</div>
 
   <div className='description'>
   <h2>
   Hey there! I'm a UI/UX designer based in Pune, currently diving into my Bachelor 
   of Design journey. My passion? Creating designs that are not just user-friendly 
   but aesthetically pleasing too .
   </h2>
   </div>


  </>
  )
}

export default HeroSection