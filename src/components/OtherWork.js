import React from 'react';
import otherWork1 from "../assets/other-work1.jpg";
import otherwork1 from "../assets/gifs/g1-w1.gif";
import otherwork2 from "../assets/gifs/g3-w3.png";
import otherwork3 from "../assets/gifs/g2-w2.gif";
import "../styles/otherWork.css";

import { useNavigate } from 'react-router-dom';

const OtherWork = () => {

  const navigate = useNavigate();

  const gotToNewPage=()=>{
    navigate("/other1");
  }

  const gotToNewPage1=()=>{
    navigate("/other2");
  }

  const gotToNewPage2=()=>{
    navigate("/other3");
  }

  return (
    <>
      <div className='other-work'>
        <h1>Other Work</h1>
     </div>

     <div className='other-work-container'>
       <div className='text-other'>
        <h4>Portfolio</h4>
        <h4>Graphic Design</h4>
        <h4>Branding</h4>
       </div>
      
       <img className='other-work-img hover-zoom'
          onClick={() => gotToNewPage()}
          loading="lazy"
          src={otherwork1}
          style={{ width: '500px', height: '500px' }}
          alt="other1"
        />

        <p>
        The Sex Education Kit for Teenagers is a 
        comprehensive resource designed to guide young 
        individuals through puberty and sexual health. 
        This kit aims to create a safe and open environment 
        where teenagers can learn and understand that it's
         okay to talk about sex. By covering essential topics
          such as consent, menstruation, and the fundamentals
           of sex, to promote  healthy and positive attitude 
           towards sexual health and relationships.
        </p>

        <p className='view-detail'>View in Detail</p>

     </div>

    
     <hr className='borde-line'/>


     <div className='other-work-container'>
       <div className='text-other'>
        <h4>Portfolio</h4>
        <h4>Game Design</h4>
        <h4>Horror</h4>
       </div>
      
       <img className='other-work-img hover-zoom'
        onClick={() => gotToNewPage1()}
          loading="lazy"
          style={{ width: '500px', height: '500px' }}
          src={otherwork2}
          alt="other1"
        />

        <p>
        Creating a game design document and developing a 
        game from scratch based on the horror mythology of 
        Bhangarh Fort in Rajasthan. The goal is to educate 
        young people about historical stories through gaming. 
        The document includes comprehensive research on the 
        history of the topic. It covers designing a logo and 
        poster for marketing, as well as developing game levels 
        and mechanics. The project also involves creating a 
        working prototype and conducting user testing.
        </p>

        <p className='view-detail'>View in Detail</p>
     </div>

     <hr className='borde-line'/>


     <div className='other-work-container'>
       <div className='text-other'>
        <h4>Freelance</h4>
        <h4>Graphic Design</h4>
        <h4>Graffiti</h4>
       </div>
      
       <img className='other-work-img hover-zoom'
        onClick={() => gotToNewPage2()}
          loading="lazy"
          style={{ width: '500px', height: '500px' }}
          src={otherwork3}
          alt="other1"
        />

        <p>
        This graphic design project includes branding and 
        conceptual wall graffiti for the entire wilo campus. 
        The designs incorporate themes related to Indian 
        musical instruments and various dance forms. The 
        project aims to enhance the campus environment with
         vibrant and culturally relevant art. It involves 
         creating a unified visual experience throughout the
          campus walls.
        </p>

        <p className='view-detail'>View in Detail</p>

     </div>

     <hr className='borde-line'/>

  
    </>
  )
}

export default OtherWork  