import React from 'react';
import { useNavigate } from "react-router-dom"

import work1 from "../assets/work1.jpg"
import work2 from "../assets/work2.jpg"
import work3 from "../assets/work3.jpg"
import "../styles/myWork.css"

const MyWork = () => {



  const navigate = useNavigate();

  const gotToNewPage=()=>{
    navigate("/pdf");
  }

  const gotToNewPage2=()=>{
    navigate("/pdf2");
  }
  const gotToNewPage3=()=>{
    navigate("/pdf3");
  }


  



  return (
    <>
      <div className='work'>
        <h1>UX UI Work</h1>
     </div>

      {/* 1. work  */}
     <div className='work-container'>
      <div className='work-sec1'>
        <div className='work-title'>UI UX design</div>
        <div className='work-description'>
          A campus engagement app for discovering and joining campus events and
          organizations.
        </div>
        <div className='work-tabs'>
          <div className='work-tab1'>Research focused</div>
          <div className='work-tab2'>Figma</div>
          <div className='work-tab3'>Prototype</div>
          {/* <div className='work-tab4'>UX</div> */}
        </div>
      </div>
      <div className='work-img hover-zoom'>
      <div className='work-text'>Gamification</div>
      <img className='work1-img'
      onClick={() => gotToNewPage()}
      loading="lazy"
      src={work1}
      alt="Profile"   
     />
      </div>
    </div>



    {/* 2.Work */}
    <div className='work-container'>
      <div className='work-sec1'>
        <div className='work-title'>UI UX design</div>
        <div className='work-description'>
        Paw saviour is a app to rescue street or harassed animals with the
        emerging technology
        </div>
        <div className='work-tabs'>
          <div className='work-tab1'>Spatial Design</div>
          <div className='work-tab2'>Figma</div>
          <div className='work-tab3'>Social Impact</div>
          {/* <div className='work-tab4'>UX</div> */}
        </div>
      </div>
      <div className='work-img hover-zoom'>
      <div className='work-text'>Design Project</div>
      <img className='work1-img'
      onClick={() => gotToNewPage2()}
      loading="lazy"
      src={work2}
      alt="Profile"   
     />
      </div>

  
    </div>


     {/* 3. Work */}
    <div className='work-container'>
      <div className='work-sec1'>
        <div className='work-title'>UI UX design</div>
        <div className='work-description'>
        Redesigning the website to boost user engagement and drive sales. Aims to create 
        a more engaging and effective user experience.
        </div>
        <div className='work-tabs'>
          <div className='work-tab1'>Website Redesign</div>
          <div className='work-tab2'>Figma</div>
          <div className='work-tab3'>UI</div>
          <div className='work-tab4'>UX</div>
        </div>
      </div>
      <div className='work-img hover-zoom'>
      <div className='work-text'>Internship</div>
      <img className='work1-img'
      onClick={() => gotToNewPage3()}
      loading="lazy"
      src={work3}
      alt="Profile"   
     />
      </div>

  
    </div>
    </>
   
  )
}

export default MyWork