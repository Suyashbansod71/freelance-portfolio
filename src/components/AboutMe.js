import React from 'react'
import figma from "../assets/figma logo.svg";
import adobe from "../assets/adobe logo.svg";
import mage from "../assets/ai logo.svg";
import ps from "../assets/core logo.svg";
import power from "../assets/ps logo.svg";
import flash from "../assets/procreate logo.svg";
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
      Hi there I’m Pranali Khatekar. To be honest, My work has become my identity, 
      and professionally, I specialize in UI/UX design. I'm naturally very curious 
      person and love to decode problems to understand them better. I enjoy working 
      on various projects where I can learn and provide solutions. Design is my 
      passion, and as a hobby, I love sketching portraits to capture memories.
      (View it on Behance) As far as experience goes, I have fair experience working 
      as a solo designer as well as having worked with excellent teams. In my free 
      time, I love playing games and showing that girls can be tough competitors not
       only in video games but also during my school days, I competed in state-level
        rifle shooting competitions. The benefit I gained from this was a stronger 
        focus and has helped me stay more concentrated and committed in various aspects 
        of my life.
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