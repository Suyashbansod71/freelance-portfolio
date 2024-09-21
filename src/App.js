import * as React from "react";
import './App.css';
import {Route, Routes } from "react-router-dom";
import PdfWork from "./components/PdfWork";
import HomePage from "./components/HomePage";
import PdfWork2 from "./components/pdfWork2";
import PdfWork3 from "./components/pdfWork3";
import PdfOtherWork from "./components/PdfOtherWork";
import PdfOtherWork2 from "./components/PdfOtherWork2";
import PdfOtherWork3 from "./components/PdfOtherWork3";
// import {next} from next;

function App() {
  return (
  
   
   
        <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pdf" element={<PdfWork />} />
            <Route path="/pdf2" element={<PdfWork2 />} />
            <Route path="/pdf3" element={<PdfWork3 />} />
            <Route path="/other1" element={<PdfOtherWork />} />
            <Route path="/other2" element={<PdfOtherWork2 />} />
            <Route path="/other3" element={<PdfOtherWork3 />} />

          </Routes>
      </div>
    
    //   <div className="App">
  
    //     <div>
          
    //       <a href="/Header"> Header</a>
    //       <a href="/HeroSection"> HeroSection</a>
          // <Routes>
          //   <Route path="/header" element={<Header />} />
          //   <Route path="/hero" element={<HeroSection />} />
          //   <Route path="/myWork" element={<MyWork />} />
          //   <Route path="/otherWork" element={<OtherWork />} />
          //   <Route path="/aboutSection" element={<AboutMe />} />
          // </Routes>
    //     </div>
     
    // </div>

  
  );
}

export default App;
