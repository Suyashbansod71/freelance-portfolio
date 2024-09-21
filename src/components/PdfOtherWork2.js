import React from 'react'
import '../styles/pdfWork.css';
import p2 from "../assets/other2/2.png";
import p3 from "../assets/other2/3.png";
import p4 from "../assets/other2/4.png";
import p5 from "../assets/other2/5.png";
import p6 from "../assets/other2/6.png";
import p7 from "../assets/other2/7.png";
import p8 from "../assets/other2/8.png";
import p9 from "../assets/other2/9.png";
import p10 from "../assets/other2/10.png";
import p11 from "../assets/other2/11.png";
import p12 from "../assets/other2/12.png";
import p13 from "../assets/other2/13.png";
import p14 from "../assets/other2/14.png";
import p15 from "../assets/other2/15.png";
import p16 from "../assets/other2/16.png";
import p17 from "../assets/other2/17.png";
import p18 from "../assets/other2/18.png";
import p19 from "../assets/other2/19.png";
import p20 from "../assets/other2/20.png";
import p21 from "../assets/other2/21.png";
import p22 from "../assets/other2/22.png";
import p23 from "../assets/other2/23.png";
import p24 from "../assets/other2/24.png";
import p25 from "../assets/other2/25.png";
import p26 from "../assets/other2/26.png";
import p27 from "../assets/other2/27.png";
import p28 from "../assets/other2/28.png";
import p29 from "../assets/other2/29.png";
import p30 from "../assets/other2/30.png";
import p31 from "../assets/other2/31.png";
import p32 from "../assets/other2/32.png";
import p33 from "../assets/other2/33.png";
import p34 from "../assets/other2/34.png";
import p35 from "../assets/other2/35.png";
import p36 from "../assets/other2/36.png";
import p37 from "../assets/other2/37.png";
import p38 from "../assets/other2/38.png";
import p39 from "../assets/other2/39.png";



import { useNavigate } from 'react-router-dom';

const PdfOtherWork2 = () => {
    const images = [
       p2, p3, p4, p5, p6, p7, p8, p9, p10,
       p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,
       p21, p22, p23, p24, p25, p26, p27, p28, p29, p30,
       p31, p32, p33, p34, p35, p36, p37, p38, p39
     ];
   
     const navigate = useNavigate();
   
     const handleHomeClick = () => {
       navigate('/');
     };
   
     const handleNextClick = () => {
       navigate('/other3');
     };

  return (
    <div className="pdf-container">


    <div className="top-bar">
   <button className="home-button" onClick={handleHomeClick}>Home</button>
   <button className="next-project-button" onClick={handleNextClick}>Next Project</button>
 </div>


 <h1 className="pdf-title">Horror</h1>

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

export default PdfOtherWork2