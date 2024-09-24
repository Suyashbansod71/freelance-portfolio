import React from 'react';
import '../styles/pdfWork.css';
import p1 from "../assets/task3/1.png";
import p2 from "../assets/task3/2.png";
import p3 from "../assets/task3/3.png";
import p4 from "../assets/task3/4.png";
import p5 from "../assets/task3/5.png";
// import p6 from "../assets/task3/6.png";
import p61 from "../assets/task3/6-1.png";
import p62 from "../assets/task3/6-2.png";
import p63 from "../assets/task3/6-3.png";

import p7 from "../assets/task3/7.png";
import p8 from "../assets/task3/8.png";
import p9 from "../assets/task3/9.png";
// import p10 from "../assets/task3/10.png";
import p101 from "../assets/task3/10-1.png";
import p102 from "../assets/task3/10-2.png";
import p11 from "../assets/task3/11.png";
// import p12 from "../assets/task3/12.png";
import p121 from "../assets/task3/12-1.png";
import p122 from "../assets/task3/12-2.png";
import p123 from "../assets/task3/12-3.png";
// import p13 from "../assets/task3/13.png";
import p131 from "../assets/task3/13-1.png";
import p132 from "../assets/task3/13-2.png";
import p133 from "../assets/task3/13-3.png";
import p14 from "../assets/task3/14.png";
import p15 from "../assets/task3/15.png";
import p16 from "../assets/task3/16.png";
import p17 from "../assets/task3/17.png";
import p18 from "../assets/task3/18.png";
// import p19 from "../assets/task3/19.png";
import p191 from "../assets/task3/19-1.png";
import p192 from "../assets/task3/19-2.png";
// import p20 from "../assets/task3/20.png";
import p201 from "../assets/task3/20-1.png";
import p202 from "../assets/task3/20-2.png";
import p21 from "../assets/task3/21.png";


import { useNavigate } from 'react-router-dom';

const PdfWork3 = () => {
  const images = [
     p1,p2, p3, p4, p5, p61, p62, p63, p7,p8,p9,p101,p102,
    p11, p121, p122, p123, p131, p132, p133, p14, p15, p16, p17, p18, p191, p192, p201,
    p202,p21
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
    navigate('/pdf2');
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



      <h1 className="pdf-title">TRIENEUR DESIGN</h1>
     
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
  );
}

export default PdfWork3;
