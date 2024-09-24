import React from 'react'
import '../styles/pdfWork.css';
import p1 from "../assets/other1/1.png";
import p2 from "../assets/other1/2.png";
import p3 from "../assets/other1/3.png";
import p4 from "../assets/other1/4.png";
import p5 from "../assets/other1/5.png";
import p6 from "../assets/other1/6.png";
import p7 from "../assets/other1/7.png";
import p8 from "../assets/other1/8.png";
import p9 from "../assets/other1/9.png";
import p10 from "../assets/other1/10.png";
import p11 from "../assets/other1/11.png";
import p12 from "../assets/other1/12.png";
import p13 from "../assets/other1/13.png";
import p14 from "../assets/other1/14.png";
import p15 from "../assets/other1/15.png";
import p16 from "../assets/other1/16.png";
import p17 from "../assets/other1/17.png";
import p18 from "../assets/other1/18.png";
import p19 from "../assets/other1/19.png";
import p20 from "../assets/other1/20.png";
import p21 from "../assets/other1/21.png";
import p22 from "../assets/other1/22.png";
import p23 from "../assets/other1/23.png";
import p24 from "../assets/other1/24.png";
import p25 from "../assets/other1/25.png";
import p26 from "../assets/other1/26.png";
import p27 from "../assets/other1/27.png";
import p28 from "../assets/other1/28.png";
import p29 from "../assets/other1/29.png";
import p30 from "../assets/other1/30.png";
import p31 from "../assets/other1/31.png";
import p32 from "../assets/other1/32.png";
import p33 from "../assets/other1/33.png";
import p34 from "../assets/other1/34.png";
import p35 from "../assets/other1/35.png";
import p36 from "../assets/other1/36.png";
import p37 from "../assets/other1/37.png";
import p38 from "../assets/other1/38.png";
import p39 from "../assets/other1/39.png";
import p40 from "../assets/other1/40.png";
import p41 from "../assets/other1/41.png";
import p42 from "../assets/other1/42.png";
import p43 from "../assets/other1/43.png";


import { useNavigate } from 'react-router-dom';

const PdfOtherWork = () => {
    const images = [
       p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
       p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,
       p21, p22, p23, p24, p25, p26, p27, p28, p29, p30,
       p31, p32, p33, p34, p35, p36, p37, p38, p39, p40,
       p41, p42, p43
     ];
   
     const navigate = useNavigate();
   
     const handleHomeClick = () => {
      window.scrollTo(0, 0);
       navigate('/');
     };
   
     const handleNextClick = () => {
       navigate('/other2');
     };

     const handleBackClick = () => {
      navigate('/');
    };

  return (
    <div className="pdf-container">


<div className="top-bar">
  <button className="home-button" onClick={handleHomeClick}>Home</button>
  <div className="project-buttons">
    <button className="next-project-button" onClick={handleBackClick}>Back Project</button>
    <button className="next-project-button" onClick={handleNextClick}>Next Project</button>
  </div>
</div>

 <h1 className="pdf-title">Sex Education Awareness</h1>

 <div className='pdf-ig'>

   {images.map((image, index) => (
     <img
       key={index}
       className='work1-img'
       loading="lazy"
       src={image}
       alt={`Page ${index + 1}`}
     />
   ))}
 </div>
</div>
  )
}

export default PdfOtherWork