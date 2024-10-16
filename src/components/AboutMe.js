import React from 'react'
import figma from "../assets/logos/figma-last.svg";
import adobe from "../assets/logos/adobe-last.svg";
import mage from "../assets/logos/ai-logo.svg";
import ps from "../assets/logos/core-last.svg";
import power from "../assets/logos/power-last.svg";
import flash from "../assets/logos/flash-last.svg";
import "../styles/aboutMe.css"

// import { useNavigate } from "react-router-dom"




const AboutMe = () => {



  // const navigate = useNavigate();

  // const gotToRPage=()=>{
  //   navigate("https://drive.google.com/drive/folders/1-BlDE606Z6Qxpp4JZUPRsiy6gWHeapzh");
  // }

  return (
    <div className='about-container'>
    <div className='about-description-container'>
      <div className='about-title'>About me</div>
      <div className='about-description'>
      Hello, I’m Pranali Khatekar ,Since childhood, I've been a creative soul,
       always doodling and exploring ways to bring ideas to life. This passion
        for creativity eventually led me to discover UI/UX design—a field where 
        I can blend technical skills with artistic expression. That realization 
        inspired me to pursue a Bachelor of Design with a specialization in UI/UX.
      Design is not just a profession for me; it's a big part of who I am. I'm 
      naturally curious and thrive on dissecting challenges to gain a deeper 
      understanding. Each project I take on is an opportunity to learn something 
      new, pushing me to grow as a designer. When I’m not designing, I enjoy sketching 
      portraits as a way to capture and preserve memories—something I find both 
      relaxing and rewarding. Some of my work is available on Behance. Working
       both independently and as part of teams has provided opportunities that 
       bring fresh insights and help me become a better designer. Design is a journey
        for me, and I’m excited to keep evolving with every step.
      </div>
    </div>

    <div className='about-border' />

    <div className='about-company'>
      <div className='company-title'>Wilo company</div>
      <p className='company-posi'>Graphic design </p>
      <p className='company-posi-des'>
      Branding and conceptual wall graffiti on the entire campus wall with different concepts. 
      </p>
    </div>

    <div className='about-border1' />

    <div className='about-company'>
      <div className='company-title'>Trieneur design</div>
      <p className='company-posi'>Ui Ux design</p>
      <p className='company-posi-des'>
      Redesigning the website to enhance user engagement and increase product sales.
      </p>
    </div>

    <div className='about-border1' />

    <div className='about-company'>
      <div className='company-title'>Research Paper</div>
      <p className='company-posi'>UGC Approved</p>
      <p className='company-posi-desc' >
      <a href="https://drive.google.com/drive/folders/1-BlDE606Z6Qxpp4JZUPRsiy6gWHeapzh"> Curse Of Bhangarh: Creating A Mythological Horror Game To Spread Cultural Awareness  </a> 
      </p>
    </div>

    <div className='about-border2' />

      <div className='about-socials'>
        <img 
          className='img1'
          loading="lazy"
          src= {figma}
          alt="Logo"
        />
        <img
          loading="lazy"
          src={adobe}
          alt="Logo"
        />
        <img
          loading="lazy"
          src={mage}
          alt="Logo"
        />
        <img
          loading="lazy"
          src={ps}
          alt="Logo"
        />
        <img
          className='img5'
          loading="lazy"
          src={power}
          alt="Logo"
        />
          <img
            className='img7'
            loading="lazy"
            src={flash}
            alt="Logo"
          />
       
     
      {/* <img
        className='img8'
        loading="lazy"
        srcSet={pranali}
        alt="Logo"
      /> */}
    </div>

    <div className='lang-list'>
    {/* <ul className='lang-list-ul'>
      <li className='lang-list-li'>English - Fluent</li>
       <li className='lang-list-li'>Marathi - Fluent</li>
       <li className='lang-list-li'>Hindi - Fluent</li>
       <li className='lang-list-li'>German - Basic A1</li>
    </ul> */}
    <p><strong>English</strong> - Fluent</p>
    <p><strong>Hindi</strong> - Fluent</p>
    <p><strong>Marathi</strong> - Fluent</p>
    <p><strong>German</strong> - Basic A1</p>
    </div>

  </div>
  )
}

export default AboutMe