import React from 'react'
import '../styles/pdfWork.css';
import p2 from "../assets/other3/130.png";
import p3 from "../assets/other3/131.png";
import p4 from "../assets/other3/132.png";
import p5 from "../assets/other3/133.png";
import p6 from "../assets/other3/134.png";
import p7 from "../assets/other3/135.png";
import p8 from "../assets/other3/136.png";
import p9 from "../assets/other3/137.png";
import p10 from "../assets/other3/138.png";
import p11 from "../assets/other3/139.png";
import p12 from "../assets/other3/140.png";
import p13 from "../assets/other3/141.png";
import p14 from "../assets/other3/142.png";
import p15 from "../assets/other3/143.png";
import p16 from "../assets/other3/144.png";
import p17 from "../assets/other3/145.png";
import p18 from "../assets/other3/146.png";
import p19 from "../assets/other3/147.png";
import p20 from "../assets/other3/148.png";
import p21 from "../assets/other3/149.png";
import p22 from "../assets/other3/150.png";
import p23 from "../assets/other3/151.png";
import p24 from "../assets/other3/152.png";
import p25 from "../assets/other3/153.png";
import p26 from "../assets/other3/154.png";
import p27 from "../assets/other3/155.png";
import p28 from "../assets/other3/156.png";
import p29 from "../assets/other3/157.png";




import { useNavigate } from 'react-router-dom';

const PdfOtherWork3 = () => {
    const images = [
       p2, p3, p4, p5, p6, p7, p8, p9, p10,
       p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,
       p21, p22, p23, p24, p25, p26, p27, p28, p29
     ];
   
     const navigate = useNavigate();
   
     const handleHomeClick = () => {
      window.scrollTo(0, 0);
       navigate('/');
     };
   
     const handleNextClick = () => {
       navigate('/');
     };

     const handleBackClick = () => {
      navigate('/other2');
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

 <h1 className="pdf-title">Wilo Internship</h1>

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

export default PdfOtherWork3