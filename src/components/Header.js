import React from 'react';
import "../styles/header.css";

const Header = ({ activeTab, setActiveTab, scrollToSection }) => {
  return (
    <div className="container">
      <div className="title">P</div>
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'MY WORK' ? 'active' : ''}`} 
          onClick={() => {
            setActiveTab('MY WORK');
            scrollToSection('myWorkRef');
          }}
        >
          MY WORK
        </div>
        <div 
          className={`tab ${activeTab === 'ABOUT ME' ? 'active' : ''}`} 
          onClick={() => {
            setActiveTab('ABOUT ME');
            scrollToSection('aboutMeRef');
          }}
        >
          ABOUT ME
        </div>
        <div 
          className={`tab ${activeTab === 'REACH OUT' ? 'active' : ''}`} 
          onClick={() => {
            setActiveTab('REACH OUT');
            scrollToSection('contactRef');
          }}
        >
          REACH OUT
        </div>
      </div>
      <div className="ux-design">UI UX DESIGN</div>
    </div>
  );
}

export default Header;
